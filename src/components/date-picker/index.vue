<script setup lang="ts">
import {
  IonDatetime,
  IonContent,
  IonButtons,
  IonButton,
  modalController
} from '@ionic/vue';
import { ref } from 'vue';
interface IProps {
  date: string;
}
defineProps<IProps>();
const datetime = ref();
const picked = ref();
const cancel = () => modalController.dismiss(false);
const confirm = async () => {
  await datetime.value.$el.confirm();
  picked.value = datetime.value.$el.value;
  await modalController.dismiss(picked);
};
</script>

<template>
  <IonContent>
    <IonDatetime ref="datetime" :value="date" size="cover" presentation="date">
      <IonButtons slot="buttons">
        <IonButton color="danger" @click="cancel()">取消</IonButton>
        <IonButton color="primary" @click="confirm()">确认</IonButton>
      </IonButtons>
    </IonDatetime>
  </IonContent>
</template>

<style scoped></style>
