<script lang="ts" setup>
import { IonPopover, IonCard } from '@ionic/vue';

interface IProps {
  msg: string;
  show: boolean;
  close: () => void;
}

const props = defineProps<IProps>();
</script>

<template>
  <ion-popover :is-open="props.show" class="" size="auto" @did-dismiss="close">
    <ion-card class="h-[400px] flex flex-col items-center">
      <ion-card-title>通知</ion-card-title>
      <ion-card-content>{{ msg }}
      </ion-card-content>
    </ion-card>
  </ion-popover>
</template>

<style scoped></style>
