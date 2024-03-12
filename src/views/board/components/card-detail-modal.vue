<script setup lang="ts">
import { IonButton, IonText, modalController } from '@ionic/vue';
import { MessageType } from '@/views/board/components/type';

interface IProps {
  msg: MessageType;
  name: string;
}
defineProps<IProps>();
const onClick = () => {
  modalController.dismiss();
};
</script>

<template>
  <div class="p-2">
    <p>发布者:{{ name }}</p>
    <p class="my-1">发布时间:{{ msg.time }}</p>
    <div class="w-full flex h-full mb-2">
      <p class="">内容:</p>
      <IonText class="border w-5/6">{{ msg.content }}</IonText>
    </div>
    <IonButton
      color="medium"
      class="mt-auto ml-auto w-1/4 flex"
      size="small"
      @click="onClick"
      >确认</IonButton
    >
  </div>
</template>

<style scoped></style>
