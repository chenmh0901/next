<script lang="ts" setup>
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonIcon
} from '@ionic/vue';
import { homeOutline, newspaperOutline, personOutline } from 'ionicons/icons';

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
    </ion-content>
    <div class="h-20"></div>
    <ion-footer class="h-20 absolute bottom-0">
      <ion-toolbar>
        <ion-buttons class="flex flex-row justify-around h-20">
          <ion-button @click="emit('toggle-page', 'USER_LIST')">
            <ion-icon slot="icon-only" :icon="homeOutline"></ion-icon>
          </ion-button>
          <ion-button @click="emit('toggle-page', 'BOARD')">
            <ion-icon slot="icon-only" :icon="newspaperOutline"></ion-icon>
          </ion-button>
          <ion-button @click="emit('toggle-page', 'PROFILE')">
            <ion-icon slot="icon-only" :icon="personOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<style scoped></style>
