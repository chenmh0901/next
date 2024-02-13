<script lang="ts" setup>
import {
  IonModal,
  IonContent,
  IonButton,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import ProfilePicker from '@/components/profile/components/profile-picker.vue';
import { ref } from 'vue';
import { ProfileFieldType } from '@/components/profile/components/profile-field';

interface IProps {
  type: ProfileFieldType;
  KEY: string;
  label: string;
}

const props = defineProps<IProps>();

const emit = defineEmits<{
  (e: 'change', val: any, type: string): void;
}>();

const modal = ref();
const val = ref();

const cancel = () => {
  modal.value.$el.dismiss();
};

//把子组件里的值通过emit抛出来
const confirm = () => {
  emit('change', val, props.KEY);
  modal.value.$el.dismiss();
};

//将抛出来的值先赋值一遍
const select = (v: any) => {
  val.value = v;
};
</script>
<template>
  <ion-modal :trigger="props.type" mode="md" ref="modal">
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="cancel()">取消</ion-button>
        </ion-buttons>
        <ion-title class="ml-24">选择{{ props.label }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="confirm">确认</ion-button>
        </ion-buttons>
      </ion-toolbar>
      <profile-picker :type="props.type" @select="select" />
    </ion-content>
  </ion-modal>
</template>
<style scoped>
ion-modal {
  --background: rgba(44, 39, 45, 0.2);

  ion-content {
    --background: transparent;
    --padding-top: 55vh;
  }
}
</style>
