<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { toast } from '@/utils/toast';
import { ref } from 'vue';
import { useDevStore } from '@/stores/dev.store';
import { useAuthStore } from '@/stores/auth.store';
import { pageTo } from '@/router/director';
import { User } from '@/types/user';
import { useUserStore } from '@/stores/user.store';
import { useHttp } from '@/utils/http';

const dev = useDevStore();
const authStore = useAuthStore();
const userStore = useUserStore();

const username = ref<string>('');
const password = ref<string>('');

const onClick = async () => {
  try {
    // ask4token
    const res_token = await useHttp<{
      detailFinished: boolean;
      access_token: string;
    }>({
      path: 'auth/signin',
      method: 'post',
      data: {
        no: username.value,
        password: password.value
      }
    });
    await authStore.setToken(res_token.data.access_token ?? '');
    console.log(res_token.data);

    // then ask for admin
    const res_user = await useHttp<User>({
      path: 'user',
      method: 'get'
    });
    await userStore.setUser(res_user.data);

    // router
    await toast('登录成功', 1500);
    if (res_token.data.detailFinished) {
      pageTo('/home');
    } else {
      pageTo('/detail');
    }
  } catch (e) {
    dev.log(e as string);
    toast('登录失败', 1500);
  }
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
