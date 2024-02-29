<script setup lang="ts">
import MessageCard from '@/components/board/message-card.vue';
import { MessageType } from '@/components/board/type';

interface IProps {
  msgs: MessageType[];
}

defineProps<IProps>();
</script>
<template>
  <IonList v-if="msgs">
    <MessageCard v-for="msg in msgs" :key="msg.id" :msg="msg" />
  </IonList>
</template>

<style scoped></style>
