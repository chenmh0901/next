<script setup lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';

export interface IProps {
  title: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ props.title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="layout-base-content">
    <slot></slot>
  </ion-content>
</template>

<style scoped></style>
