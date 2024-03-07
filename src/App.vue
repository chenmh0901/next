<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
  <div class="global-test-region" @click="debug" />
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { exampleCreateAndShareFile } from '@/utils/share';
const debug = () => {
  exampleCreateAndShareFile();
};
</script>

<style scoped>
.global-test-region {
  @apply absolute right-0 bottom-0 bg-red-100 w-4 h-4;
}
</style>
