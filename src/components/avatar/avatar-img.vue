<script lang="ts" setup>
import { ref } from 'vue';

interface IProps {
  src: string;
}
defineProps<IProps>();
const loaded = ref(false);
</script>
<template>
  <div>
    <img :src="src" alt="" @load="loaded = true" />
    <img
      v-if="!loaded && !src"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
      alt=""
    />
  </div>
</template>

<style scoped></style>
