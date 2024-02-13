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
  <ion-popover :is-open="props.show" class="" size="auto" @did-dismiss="close">
    <msg-card :msg="props.msg"></msg-card>
  </ion-popover>
</template>

<style scoped></style>
