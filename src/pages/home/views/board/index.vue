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
  return await useHttp(option);
};
const userStore = useUserStore();
const isAdmin = ref<boolean>();
const refresh = async () => {
  const { data } = await fetchMessages();
  rawMsgs.value = data as MessageType[];
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
  <div v-if="msgs?.length">
    <MessageList :msgs="msgs" />
    <IonButton
      v-if="isAdmin"
      class="absolute top-12 right-3 rounded-full"
      @click="publish"
    >
      <IonIcon :icon="add"></IonIcon>
    </IonButton>
  </div>
</template>

<style scoped></style>
