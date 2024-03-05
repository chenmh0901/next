<script lang="ts" setup>
import { ref } from 'vue';

interface IProps {
  src: string;
  circle?: boolean;
}
defineProps<IProps>();

const loaded = ref(false);
const isError = ref(false);
</script>

<template>
  <div>
    <img
      v-show="!isError"
      :class="circle ? 'aspect-square object-contain border-b' : 'rounded-full'"
      :src="src"
      alt=""
      @load="loaded = true"
      @error="isError = true"
    />
    <img
      v-if="!loaded || isError"
      :class="circle ? 'avatar-img__circle' : 'avatar-img__matrix'"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
      alt=""
    />
  </div>
</template>

<style scoped></style>
