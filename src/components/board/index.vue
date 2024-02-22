<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import { onBeforeMount, ref } from 'vue';
import MessageList from '@/components/board/components/message-list.vue';
import { IHttpOptions, useHttp } from '@/utils/http';
import { MessageType } from '@/components/board/type';
import MessageForm from '@/components/board/components/message-form.vue';
import { useModal } from '@/composables/use-modal';

const msgs = ref<MessageType[]>();

const fetchMessages = async () => {
  const option: IHttpOptions<any> = {
    path: 'message/',
    method: 'get'
  };
  return await useHttp(option);
};
const { open } = useModal(MessageForm);
onBeforeMount(() => {
  fetchMessages().then((r) => {
    msgs.value = r.data as MessageType[];
  });
});
</script>

<template>
  <MessageList v-if="!!msgs" :msgs="msgs" />
  <IonButton @click="open">打开</IonButton>
</template>

<style scoped></style>
