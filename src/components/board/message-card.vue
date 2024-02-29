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
}

defineProps<IProps>();
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>发布时间: {{ msg?.time }}</IonCardSubtitle>
      <IonCardTitle>{{ msg?.userId ?? 'userId invalid' }}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>{{ msg?.content }}</IonCardContent>
  </IonCard>
</template>

<style scoped></style>
