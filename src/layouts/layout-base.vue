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
import ThemeToggle from '@/components/theme-toggle/index.vue';

const emit = defineEmits<{
  (e: 'toggle-page', val: PAGE): void;
}>();

type PAGE = 'USER_LIST' | 'BOARD' | 'PROFILE';
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>搜索框</IonTitle>
        <ThemeToggle />
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true" class="layout-base-content">
      <slot></slot>
    </IonContent>
    <div class="h-20"></div>
    <IonFooter class="h-20 absolute bottom-0">
      <IonToolbar>
        <ion-buttons class="flex flex-row justify-around h-20">
          <ion-button @click="emit('toggle-page', 'USER_LIST')">
            <IonIcon slot="icon-only" :icon="homeOutline"></IonIcon>
          </ion-button>
          <ion-button @click="emit('toggle-page', 'BOARD')">
            <IonIcon slot="icon-only" :icon="newspaperOutline"></IonIcon>
          </ion-button>
          <ion-button @click="emit('toggle-page', 'PROFILE')">
            <IonIcon slot="icon-only" :icon="personOutline"></IonIcon>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonFooter>
  </IonPage>
</template>

<style scoped></style>
