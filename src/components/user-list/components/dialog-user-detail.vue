<script lang="ts" setup>
import DetailShow from '@/components/detail/detail-show.vue';
import { User } from '@/types/user';
import { IonPopover } from '@ionic/vue';

interface IProps {
  user: User;
  show: boolean;
  close: () => void;
}

const props = defineProps<IProps>();
</script>

<template>
  <ion-popover id="example-modal" :is-open="props.show" @didDismiss="close">
    <div class="w-[200px] h-[400px] ">
      <detail-show :user="props.user"></detail-show>
    </div>
  </ion-popover>
</template>

<style scoped></style>
