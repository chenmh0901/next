<script setup lang="ts">
import { IonCard, IonContent, IonText } from '@ionic/vue';
import DetailForm from '@/components/detail/detail-form.vue';
</script>

<template>
  <ion-content>
    <ion-text>还差最后一步！</ion-text>
    <ion-text>您还需要完善一些信息来加入芸馆</ion-text>
    <ion-card style="height: 60%; width: 60%; margin: 20%">
      <detail-form style="height: 100%; width: 100%"></detail-form>
    </ion-card>
  </ion-content>
</template>

<style scoped></style>
