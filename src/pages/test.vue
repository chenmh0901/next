<script lang="ts" setup>
import { onMounted, ref, StyleValue, watch } from 'vue';
import { useDraggable } from '@vueuse/core';

const cardEl = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(cardEl, {
  initialValue: { x: 40, y: 40 }
});
const customStyle = ref<StyleValue>();
watch([x, y], () => {
  const random = Math.random() * 50;

  const top = y.value + random + 'px';
  const left = x.value + random + 'px';
  setTimeout(() => {
    customStyle.value = {
      position: 'fixed',
      top,
      left
    } as StyleValue;
  }, 233);
});
const helloEl = ref<HTMLElement | null>(null);
onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    if (helloEl.value) {
      const x = (window.innerWidth / 2 - e.pageX) / 10;
      const y = (window.innerHeight / 2 - e.pageY) / 10;
      helloEl.value.style.transform = `perspective(1000px) rotateY(${y}deg) rotateX(${x}deg)`;
    }
  });
});
</script>

<template>
  <div
    ref="cardEl"
    :style="style"
    style="position: fixed; width: 200px; height: 200px"
  >
    <el-card style="width: 200px; height: 200px">你好</el-card>
  </div>

  <div
    ref="helloEl"
    :style="customStyle"
    class="w-24 h-24 block shadow-2xl hello"
  />
</template>

<style scoped>
.hello {
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border-radius: 50%;
  z-index: 1000;
}
</style>
