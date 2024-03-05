<script lang="ts" setup>
import { ref, computed } from 'vue';

interface IProps {
  src: string;
  circle?: boolean;
}

const props = defineProps<IProps>();

const loaded = ref(false);
const isError = ref(false);

const baseClass = computed(() => {
  const base = 'aspect-square object-cover border-b';
  if (props.circle) {
    return base + ' rounded-full';
  } else {
    return base;
  }
});
</script>

<template>
  <div>
    <img
      v-show="!isError"
      :class="baseClass"
      :src="src"
      alt=""
      @load="loaded = true"
      @error="isError = true"
    />
    <img
      v-if="!loaded || isError"
      :class="baseClass"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
      alt=""
    />
  </div>
</template>

<style scoped></style>
