<script setup lang="ts">
import { IonCard, IonContent, IonText } from '@ionic/vue';
import DetailForm from '@/components/detail/detail-form.vue';
</script>

<template>
  <ion-content>
    <ion-text color="primary"><h1>还差最后一步</h1></ion-text>
    <ion-text><h3>您还需要完善一些信息来加入芸馆</h3></ion-text>
    <ion-card
      style="height: 60%; width: 60%; margin: 10% 0 10% 20%; padding: 5%"
    >
      <detail-form style="height: 100%; width: 100%"></detail-form>
    </ion-card>
  </ion-content>
</template>

<style scoped></style>
