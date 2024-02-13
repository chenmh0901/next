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
  birthday: 'asdasdasdsa',
  resume: ''
} as User);

const refresh = () => {};
</script>

<template>
  <ion-content>
    <div class="flex justify-center items-center bg-gray-500 h-200">
      <ion-avatar
        v-if="val === FormMode.VIEW"
        style="width: 150px; height: 150px; --border-radius: 4px"
      >
      </ion-avatar>
      <ion-avatar
        v-else
        style="width: 150px; height: 150px; --border-radius: 4px"
      >
      </ion-avatar>
    </div>
    <div class="flex justify-center">
      <profile-form
        :form-mode="val"
        :toggle="() => toggle()"
        :user="user"
        @save="refresh()"
      />
    </div>
  </ion-content>
</template>

<style scoped></style>
