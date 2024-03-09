<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
import { MessageType } from '@/views/board/components/type';
import { useModal } from '@/composables/use-modal';
import CardDetailPopover from '@/views/board/components/card-detail-modal.vue';

interface IProps {
  msg: MessageType;
  nameDict: Record<string, string>;
}
const props = defineProps<IProps>();
// open msg detail
const { open } = useModal();
const onClick = async () => {
  await open({
    component: CardDetailPopover,
    property: {
      msg: props.msg,
      name: props.nameDict[props.msg.userId]
    },
    cssClass: 'dialog-modal'
  });
};
</script>

<template>
  <IonCard class="pb-2" @click="onClick">
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
