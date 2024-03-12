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
  <div class="card-detail">
    <header class="flex items-center mb-4">
      <div class="flex items-end">
        <span class="text-[26px] font-bold" style="line-height: 30px">{{ name }}</span>
        <span
          class="text-xs font-semibold ml-1"
          style="color: var(--zust-cloud-primary-80)"
          >发布者</span
        >
      </div>
      <div class="ml-auto text-sm" style="color: #666">{{ msg.time }}</div>
    </header>

    <figure>
      <IonText class="text-sm" style="color: #666">{{ msg.content }}</IonText>
    </figure>
    <footer>
      <IonButton
        color="undefined"
        class="card-detail-confirm"
        size="small"
        @click="onClick"
      >
        确认
      </IonButton>
    </footer>
  </div>
</template>

<style scoped>
.card-detail {
  @apply p-4 flex flex-col;
}
.card-detail-confirm {
  @apply mt-auto ml-auto w-[80px] flex rounded;
  background-color: var(--zust-cloud-primary-80);
}
</style>
