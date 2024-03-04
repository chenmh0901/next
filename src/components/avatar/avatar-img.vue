<script lang="ts" setup>
import { ref } from 'vue';

interface IProps {
  src: string;
}
defineProps<IProps>();

const loaded = ref(false);
const isError = ref(false);
</script>

<template>
  <div>
    <img
      v-show="!isError"
      class="avatar-img"
      :src="src"
      alt=""
      @load="loaded = true"
      @error="isError = true"
    />
    <img
      v-if="!loaded || isError"
      class="avatar-img"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
      alt=""
    />
  </div>
</template>

<style scoped>
.avatar-img {
  @apply aspect-square;
  object-fit: contain;
}
</style>
