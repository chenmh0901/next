<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { toast } from '@/utils/toast';
import axios from 'axios';
import { ref } from 'vue';
import { useDevStore } from '@/stores/dev.store';
import { useAuthStore } from '@/stores/auth.store';
import { pageTo } from '@/router/director';

const dev = useDevStore();
const authStore = useAuthStore();

const username = ref<string>('');
const password = ref<string>('');

const onClick = () => {
  // TODO 登录逻辑
  // 1. 登录成功再把东西存到 store 里
  // 2. 每次只需要判断 store 里有没有东西，有的话就直接跳转
  const config = {
    method: 'post',
    url: 'http://localhost:3000/auth/signin',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      no: username.value,
      password: password.value
    }
  };
  axios(config)
    .then(
      (res: { data: { detailFinished: boolean; access_token: string } }) => {
        if (res.data.access_token) {
          authStore.setToken(res.data.access_token ?? '');
          toast('登录成功', 1500);
          if (res.data.detailFinished) {
            pageTo('/home');
          } else {
            pageTo('/detail');
          }
        } else {
          toast('登录错误，请联系管理员', 1500);
        }
      }
    )
    .catch((err) => {
      dev.log(err);
      toast('登录失败', 1500);
    });
};
</script>

<template>
  <ion-content>
    <div class="welcome-signin">
      <h1>登入芸馆💡</h1>
      <ion-input
        :value="username"
        @ion-input="username = $event.target.value as string"
        placeholder="输入您的账号"
      ></ion-input>
      <ion-input
        :value="password"
        @ion-input="password = $event.target.value as string"
        placeholder="输入您的密码"
        type="password"
      ></ion-input>
      <ion-button @click="onClick">登录</ion-button>
    </div>
  </ion-content>
</template>

<style scoped>
.welcome-signin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.welcome-signin ion-input {
  width: 30vw;
}
</style>
