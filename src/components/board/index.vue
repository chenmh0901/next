<script lang="ts" setup>
import { IonButton, IonIcon } from '@ionic/vue';
import { onBeforeMount, ref } from 'vue';
import MessageList from '@/components/board/components/message-list.vue';
import { IHttpOptions, useHttp } from '@/utils/http';
import { MessageType } from '@/components/board/type';
import MessageForm from '@/components/board/components/message-form.vue';
import { useModal } from '@/composables/use-modal';
import { add } from 'ionicons/icons';

const msgs = ref<MessageType[]>();
const { open } = useModal(MessageForm);

const fetchMessages = async () => {
  const option: IHttpOptions<any> = {
    path: 'message/',
    method: 'get'
  };
  return await useHttp(option);
};
onBeforeMount(() => {
  fetchMessages().then((r) => {
    msgs.value = r.data as MessageType[];
  });
});
</script>

<template>
  <div v-if="msgs?.length">
    <MessageList :msgs="msgs" />
    <IonButton class="absolute top-12 right-3 rounded-full" @click="open">
      <IonIcon :icon="add"></IonIcon>
    </IonButton>
  </div>
</template>

<style scoped></style>
