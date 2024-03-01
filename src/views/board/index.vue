<script lang="ts" setup>
import { IonButton, IonIcon } from '@ionic/vue';
import { computed, onBeforeMount, ref } from 'vue';
import MessageList from '@/components/board/message-list.vue';
import { IHttpOptions, useHttp } from '@/utils/http';
import { MessageType } from '@/components/board/type';
import MessageForm from '@/components/board/message-form.vue';
import { useModal } from '@/composables/use-modal';
import { add } from 'ionicons/icons';
import { format } from 'date-fns';
import { useUserStore } from '@/stores/user';

const rawMsgs = ref<MessageType[]>();
const { open } = useModal(MessageForm);
const msgs = computed(() => {
  return rawMsgs.value
    ?.map((msg) => {
      if (msg.time) {
        msg.time = format(msg.time, 'yyyy-MM-dd');
      }
      return msg;
    })
    .sort((a, b) => {
      if (a.id && b.id) {
        return b.id - a.id;
      }
      return 0;
    });
});
const fetchMessages = async () => {
  const option: IHttpOptions<any> = {
    path: 'message/',
    method: 'get'
  };
  return await useHttp<MessageType[]>(option);
};
const userStore = useUserStore();
const isAdmin = ref<boolean>();
const refresh = async () => {
  const { data } = await fetchMessages();
  rawMsgs.value = data;
};

const publish = async () => {
  const data = await open();
  if (data) {
    await refresh();
  }
};
onBeforeMount(async () => {
  await refresh();
  isAdmin.value = await userStore.isAdmin();
});
</script>

<template>
  <div class="border__content">
    <div v-if="msgs?.length && msgs.length > 0">
      <MessageList :msgs="msgs" />
    </div>
    <div>
      <IonButton
        v-if="!isAdmin"
        class="message__add-btn"
        size="small"
        @click="publish"
      >
        <IonIcon :icon="add"></IonIcon>
      </IonButton>
    </div>
  </div>
</template>

<style scoped>
.message__add-btn {
  @apply fixed top-9 right-3 w-[40px] h-[30px];
}
</style>
