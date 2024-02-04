<script setup lang="ts">
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage
} from '@ionic/vue';

const emit = defineEmits<{
  (e: 'toggle-page', val: PAGE): void;
}>();

type PAGE = 'USER_LIST' | 'BOARD' | 'PROFILE';
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>搜索框</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="layout-base-content">
      <slot></slot>
dxdx      <div class="h-15"></div>
    </ion-content>
    <ion-footer class="h-15" style="position: absolute; bottom: 0;">
      <ion-toolbar>
        <ion-button @click="emit('toggle-page', 'USER_LIST')">Home</ion-button>
        <ion-button @click="emit('toggle-page', 'BOARD')">Board</ion-button>
        <ion-button @click="emit('toggle-page', 'PROFILE')">Profile</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<style scoped></style>
