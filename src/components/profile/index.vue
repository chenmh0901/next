<script lang="ts" setup>
import {
  IonContent,
  IonPage,
  IonFooter,
  IonHeader,
  IonAvatar,
  IonIcon
} from '@ionic/vue';
import { settingsOutline } from 'ionicons/icons';
import ProfileForm from './components/profile-form.vue';
import { User } from '@/types/user';
import { ref } from 'vue';
import { useToggle } from '@/composables/use-toggle';

type FormMode = 'EDIT' | 'VIEW';
const formMode = useToggle<FormMode>(ref<FormMode>('VIEW'), { Truthy: 'EDIT', Falsy: 'VIEW' });

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
          v-if="!edit"
          style="width: 150px; height: 150px; --border-radius: 4px"
        >
          <!--<img src="('@/assets/icon.png')" alt="avatar loading" />-->
        </ion-avatar>
        <ion-avatar
          v-else
          style="width: 150px; height: 150px; --border-radius: 4px"
        >
          <!--<img src="('@/assets/splash.png')" alt="avatar loading" />-->
        </ion-avatar>
      </div>
      <div class="profile-info">
        <profile-form
          :form-mode="formMode.val.value"
          :toggle="
            () => {
              formMode.toggle();
            }
          "
          :user="user"
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
