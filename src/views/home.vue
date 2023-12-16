<template>
  <ion-page>
    <ion-header :translucent="true" style="box-shadow: none">
      <ion-toolbar>
        <ion-title style="margin-left: 50%">芸社</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-searchbar
        placeholder="搜索"
        style="--box-shadow: none; border-bottom: grey solid 1px"
      ></ion-searchbar>
      {{ users }}
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-title style="margin-left: 40%">Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonSearchbar
} from '@ionic/vue';
import { addCircleOutline } from 'ionicons/icons';
import { ref } from 'vue';
import { User } from '@/types/user';

const users = ref<User[]>([]);
</script>
