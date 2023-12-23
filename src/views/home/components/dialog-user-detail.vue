<script setup lang="ts">
import DetailShow from '@/components/detail/detail-show.vue';
import { User } from '@/types/user';

interface IProps {
  user: User;
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="w-[400px] h-[400px] bg-amber-400">
    <detail-show :user="props.user"></detail-show>
  </div>
</template>

<style scoped></style>
