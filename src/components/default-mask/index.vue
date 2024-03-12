<script setup lang="ts">
import { Icon } from '@iconify/vue';
interface IProps {
  text: string;
}
defineProps<IProps>();
</script>

<template>
  <div class="loading-mask">
    <Icon class="text-[60px] mb-4" icon="svg-spinners:blocks-shuffle-3" />
    <div class="text-[20px]">{{ text }}</div>
  </div>
</template>

<style scoped>
.loading-mask {
  @apply absolute flex flex-col justify-center w-full h-full top-0 bottom-0 items-center;
  background-color: rgba(121, 121, 121, 0.2);
}
</style>
