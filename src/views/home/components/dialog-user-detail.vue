<script setup lang="ts">
import DetailShow from '@/components/detail/detail-show.vue';
import { User } from '@/types/user';
import { IonModal } from '@ionic/vue';

interface IProps {
  user: User;
  show: boolean;
  close: () => void;
}
const props = defineProps<IProps>();
</script>

<template>
  <ion-modal id="example-modal" :is-open="props.show" @didDismiss="close">
    <div class="w-[400px] h-[400px] bg-amber-400">
      <detail-show :user="props.user"></detail-show>
    </div>
  </ion-modal>
</template>

<style scoped></style>
