<script lang="ts" setup>
import { IonPopover } from '@ionic/vue';
import MsgCard from '@/components/board/components/msg-card.vue';

interface IProps {
  msg: string;
  show: boolean;
  close: () => void;
}

const props = defineProps<IProps>();
</script>

<template>
  <IonPopover :is-open="props.show" class="" size="auto" @did-dismiss="close">
    <MsgCard :msg="props.msg"></MsgCard>
  </IonPopover>
</template>

<style scoped></style>
