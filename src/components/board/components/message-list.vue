<script setup lang="ts">
import MessageCard from '@/components/board/components/message-card.vue';

interface IProps {
  msgs: any[];
}

defineProps<IProps>();
</script>
<template>
  <IonList v-if="msgs">
    <MessageCard v-for="msg in msgs" :key="msg.id" :msg="msg" />
  </IonList>
</template>

<style scoped></style>
