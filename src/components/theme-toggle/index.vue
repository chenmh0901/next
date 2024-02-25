<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { sunnyOutline, moonOutline } from 'ionicons/icons';
import { useEasyToggle } from '@/composables/use-easy-toggle';

const { val, toggle } = useEasyToggle(['light', 'dark']);

// 切换主题
function toggleTheme() {
  const checked = val.value == 'light';
  toggle();
  document.body.classList.toggle('dark', checked);
}
</script>

<template>
  <IonButtons slot="end" class="theme__toggle">
    <IonButton v-if="val == 'dark'" @click="toggleTheme">
      <IonIcon :icon="sunnyOutline" class="w-full h-full" />
    </IonButton>
    <IonButton v-else @click="toggleTheme">
      <IonIcon :icon="moonOutline" class="w-full h-full" />
    </IonButton>
  </IonButtons>
</template>

<style scoped>
.theme__toggle {
  @apply w-[25px] h-[25px] border;
}
</style>
