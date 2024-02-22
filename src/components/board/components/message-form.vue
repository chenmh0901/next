<script setup lang="ts">
import { modalController } from '@ionic/vue';
import { ref } from 'vue';

const name = ref();

const cancel = () => modalController.dismiss(null, 'cancel');
const confirm = () => modalController.dismiss(name.value, 'confirm');
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Cancel</ion-button>
      </ion-buttons>
      <ion-title>Modal</ion-title>
      <ion-buttons slot="end">
        <ion-button :strong="true" @click="confirm">Confirm</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-input
        v-model="name"
        label-placement="stacked"
        label="Enter your name"
        placeholder="Your name"
      ></ion-input>
    </ion-item>
  </ion-content>
</template>

<style scoped></style>
