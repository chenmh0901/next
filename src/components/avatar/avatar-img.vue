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
  <transition>
    <img
      v-if="!isError"
      :class="baseClass"
      :src="src"
      alt=""
      @loadstart="loaded = true"
      @load="loaded = true"
      @error="isError = true"
    />
    <img
      v-else-if="!loaded || isError"
      :class="baseClass"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
      alt=""
    />
  </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
