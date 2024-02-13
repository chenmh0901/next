<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item
      v-for="(item, key) in PROFILE_FIELDS"
      :key="key"
      class="my-4"
      lines="none"
    >
      <ion-label class="w-1/5">{{ item.label }}:</ion-label>
      <ion-input
        class="border border-grey-300 rounded-lg text-center w-4/5"
        :id="item.type"
        :value="form[item.key]"
        @change="
          (a) => {
            form[item.key] = a.target.value;
          }
        "
      >
      </ion-input>
      <template v-if="item.type">
        <dialog-modal-detail
          :type="item.type"
          :KEY="item.key"
          :label="item.label"
          @change="change"
        ></dialog-modal-detail>
      </template>
    </ion-item>
  </ion-content>
</template>

<script lang="ts" setup>
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/vue';
import { PROFILE_FIELDS } from '@/components/profile/components/profile-field';
import DialogModalDetail from '@/components/profile/components/dialog-modal-detail.vue';
import { ref } from 'vue';

const form = ref({
  id: 1,
  no: '',
  name: '',
  admin: true,
  email: '',
  wechat: '',
  QQ: '',
  phone: '',
  class: '',
  room: '',
  birthPlace: '',
  birthday: 'asdasdasdsa',
  resume: ''
});

const change = (val: any, key: string) => {
  form.value[key] = val;
};
</script>
<style scoped></style>
