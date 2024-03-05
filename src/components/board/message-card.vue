<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
import { MessageType } from '@/components/board/type';

interface IProps {
  msg: MessageType;
  nameDict: Record<string, string>;
}
defineProps<IProps>();
</script>

<template>
  <IonCard class="pb-2">
    <IonCardHeader>
      <IonCardSubtitle>发布时间: {{ msg.time }}</IonCardSubtitle>
      <IonCardTitle>{{ nameDict[msg.userId] }}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <div class="three-truncate">{{ msg.content }}</div>
    </IonCardContent>
  </IonCard>
</template>

<style scoped>
.three-truncate {
  @apply max-h-[60px];
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
