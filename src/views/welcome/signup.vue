<script setup lang="ts">
import { IonButton, IonContent, IonInput, IonText } from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';
import { validateForm } from '@/utils/validateForm';
import { pageTo } from '@/router/director';

interface registerForm {
  no: string;
  password: string;
  email: string;
}
const user = ref<registerForm>({
  no: '',
  password: '',
  email: ''
});
const submit = async () => {
  if (validateForm(user.value)) {
    const config = {
      url: `http://localhost:3000/auth/signin`,
      method: 'post',
      data: { no: user.value.no, password: user.value.password },
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*'
      }
    };
    axios(config).then((r) => {
      console.log(r.data);
      pageTo('/detail');
    });
  }
};

// TODO 点击注册新账号按钮 -> 在此页面控制注册逻辑
const showSignupForm = ref(false);
</script>

<template>
  <ion-content>
    <div class="welcome-signup">
      <template v-if="showSignupForm">
        <h1>注册新账号</h1>
        <ion-input
          placeholder="输入您的学号"
          label="学号"
          :value="user.no"
          @ion-input="user.no = $event.target.value as string"
          type="text"
          :clear-input="true"
        ></ion-input>
        <ion-input
          placeholder="输入您的密码"
          label="密码"
          :value="user.password"
          @ion-input="user.password = $event.target.value as string"
          type="password"
        ></ion-input>
        <ion-input
          placeholder="输入您的邮箱"
          label="邮箱"
          :value="user.email"
          @ion-input="user.email = $event.target.value as string"
          type="text"
        ></ion-input>
        <ion-button shape="round" @click="submit">点击注册新账号</ion-button>
        <ion-button shape="round" fill="outline" @click="showSignupForm = false"
          >我要填写邀请码
        </ion-button>
      </template>
      <template v-else>
        <h1>您是否有邀请码？📜</h1>
        <ion-input
          placeholder="若有，点此输入邀请码"
          style="width: 40vw"
        ></ion-input>
        <ion-button
          shape="round"
          fill="outline"
          style="margin: 1rem"
          @click="showSignupForm = true"
          >没有，注册新账号
        </ion-button>
        <ion-text>已有账号？右滑去登录</ion-text>
      </template>
    </div>
  </ion-content>
</template>

<style scoped>
.welcome-signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.welcome-signup ion-input {
  width: 40vw;
}
</style>
