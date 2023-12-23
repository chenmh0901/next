<script setup lang="ts">
import DetailShow from '@/components/detail/detail-show.vue';
import { User } from '@/types/user';

interface IProps {
  user: User;
  close: () => void;
}
const props = defineProps<IProps>();
</script>

<template>
  <ion-modal>
    <div class="w-[400px] h-[400px] bg-amber-400">
      <detail-show :user="props.user" :close="props.close"></detail-show>
    </div>
  </ion-modal>
</template>

<style scoped></style>
