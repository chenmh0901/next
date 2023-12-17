<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>这个标题应该是不需要的，除非多端适配有效果</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      {{ users }}
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import 'swiper/css';
import { ref } from 'vue';
import { User } from '@/types/user';

const users = ref<User[]>([]);
</script>
