<script lang="ts" setup>
import { IonButton, IonIcon } from '@ionic/vue';
import { computed, onBeforeMount, ref } from 'vue';
import { IHttpOptions, useHttp } from '@/utils/http';
import { MessageType } from '@/views/board/components/type';
import { useModal } from '@/composables/use-modal';
import { add } from 'ionicons/icons';
import { format } from 'date-fns';
import { useUserStore } from '@/stores/user';
import MessageList from '@/views/board/components/message-list.vue';
import MessageForm from '@/views/board/components/message-form.vue';
import LoadingMask from '@components/loading-mask/index.vue';
import DefaultMask from '@components/default-mask/index.vue';

const rawMsgs = ref<MessageType[]>();
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

const refresh = async () => {
  const { data } = await fetchMessages();
  rawMsgs.value = data;
};
// onClick open modal and publish message
const { open } = useModal();
const publish = async () => {
  const data = await open({ component: MessageForm });
  if (data) {
    await refresh();
  }
};

// isAdmin
const userStore = useUserStore();
const isAdmin = ref<boolean>();
const loading = ref();
onBeforeMount(async () => {
  loading.value = true;
  await refresh();
  isAdmin.value = await userStore.isAdmin();
  loading.value = false;
});
</script>

<template>
  <div>
    <template v-if="!loading">
      <div v-if="msgs?.length && msgs.length > 0">
        <MessageList :msgs="msgs" />
      </div>
      <DefaultMask v-else text="还未有任何通知发布..." />
    </template>
    <LoadingMask v-else />
    <IonButton
      v-if="isAdmin"
      class="message-add-btn"
      size="small"
      @click="publish"
    >
      <IonIcon :icon="add"></IonIcon>
    </IonButton>
  </div>
</template>

<style scoped>
.message-add-btn {
  @apply fixed top-[38px] right-3 w-[40px] h-[30px];
}
</style>
