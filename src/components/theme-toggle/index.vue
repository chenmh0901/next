<script setup lang="ts">
import { ref } from 'vue';

const toggle = ref();

// 切换主题
function toggleTheme(val: any) {
  const checked = val?.detail?.checked;
  document.body.classList.toggle('dark', checked);
  document.body.classList.toggle('light', !checked);
  console.log(checked);
}
</script>

<template>
  <ion-item lines="full">
    <ion-label> Toggle Dark Theme</ion-label>
    <ion-toggle
      id="themeToggle"
      ref="toggle"
      slot="end"
      @ion-change="toggleTheme"
    ></ion-toggle>
  </ion-item>
</template>

<style scoped></style>
