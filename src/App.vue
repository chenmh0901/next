<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
  <div v-show="true" class="global-test-region" @click="debug" />
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import {
  exampleCreateAndDownloadFile,
  exampleCreateAndShareFile
} from '@/utils/share';
const debug = () => {
  exampleCreateAndDownloadFile();
};
</script>

<style scoped>
.global-test-region {
  @apply absolute right-0 bottom-0 bg-red-100 w-24 h-24;
}
</style>
