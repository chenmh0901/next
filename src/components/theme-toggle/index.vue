<script setup lang="ts">
import { IonToggle } from '@ionic/vue';
import { ref } from 'vue';

const toggle = ref();

// 切换主题
function toggleTheme(val: any) {
  const checked = val?.detail?.checked;
  document.body.classList.toggle('dark', checked);
  document.body.classList.toggle('light', !checked);
}
</script>

<template>
  <IonToggle
    id="themeToggle"
    ref="toggle"
    slot="end"
    size="small"
    @ion-change="toggleTheme"
  ></IonToggle>
</template>

<style scoped></style>
