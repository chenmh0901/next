<script lang="ts" setup>
import { IonContent, IonAvatar } from '@ionic/vue';
import ProfileForm from './components/profile-form.vue';
import { User } from '@/types/user';
import { ref } from 'vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';

enum FormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

const { val, toggle } = useEasyToggle([FormMode.VIEW, FormMode.EDIT]);

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
  birthday: '',
  resume: ''
} as User);
</script>

<template>
  <ion-content>
    <div class="profile-avatar">
      <ion-avatar
        v-if="val === FormMode.VIEW"
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
      <profile-form :form-mode="val" :toggle="() => toggle()" :user="user" />
    </div>
  </ion-content>
</template>

<style scoped>
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
