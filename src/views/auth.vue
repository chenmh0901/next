<script setup lang="ts">
import { IonInput, IonPage, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';

export interface User {
  no: string;
  password: string;
  email?: string;
}

const user = ref<User>({
  no: '',
  password: ''
});

const signup = ref(false);
const submit = async () => {
  const type: string = signup.value ? 'signup' : 'signin';
  const config = {
    url: `http://localhost:3000/auth/` + type,
    method: 'post',
    data: signup.value
      ? user.value
      : { no: user.value.no, password: user.value.password },
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*'
    }
  };
  const res = await axios(config);
  console.log(res);
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>登录/注册</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-input
            label="学号"
            type="text"
            :value="user.no"
            @ion-input="user.no = $event.target.value as string"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            label="密码"
            type="password"
            :value="user.password"
            @ion-input="user.password = $event.target.value as string"
          ></ion-input>
        </ion-item>
        <template v-if="signup">
          <ion-item>
            <ion-input
              label="邮箱"
              type="email"
              :value="user.email"
              @ion-input="user.email = $event.target.value as string"
            ></ion-input>
          </ion-item>
        </template>

        <ion-item>
          <ion-button type="submit" @click="submit">提交</ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="signup = !signup"
            >{{ signup ? '去登录' : '注册' }}
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
