<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="settingsOutline" size="large"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="profile-avatar">
        <ion-avatar
          style="width: 150px; height: 150px; --border-radius: 4px"
          v-if="!edit"
        >
          <img :src="require('@/assets/icon.png')" alt="avatar loading" />
        </ion-avatar>
        <ion-avatar
          style="width: 150px; height: 150px; --border-radius: 4px"
          v-else
        >
          <img :src="require('@/assets/splash.png')" alt="avatar loading" />
        </ion-avatar>
      </div>
      <div class="profile-info">
        <profile-form
          :user="user"
          :edit="edit"
          :change-mode="
            () => {
              edit = !edit;
            }
          "
        />
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-title>是管理员吗？ {{ 'isAdminUser' }}</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonFooter,
  IonHeader,
  IonAvatar
} from '@ionic/vue';
import { settingsOutline } from 'ionicons/icons';
import ProfileForm from './components/profile-form.vue';
import { User } from '@/types/user';
import { ref } from 'vue';

const edit = ref(false);
const user = ref<User>({
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
  resume: ''
} as User);
</script>

<style coped>
.profile-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  height: 200px;
}

.profile-info {
  display: flex;
  justify-content: center;
}
</style>
