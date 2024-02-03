<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { ref } from 'vue';
import { pageTo } from '@/router/director';

const username = ref();
const password = ref();
const onClick = async () => {
  if (await validate()) {
    pageTo('home');
  }
};

const validate = async () => {
  if (username.value == 'test' && password.value == 'admin123') {
    return true;
  }
  return false;
};
</script>

<template>
  <ion-content>
    <div class="signin">
      <h1>登入芸馆💡</h1>
      <ion-input
        class="signin-input"
        :value="username"
        @ion-input="username = $event.target.value as string"
        placeholder="输入您的账号"
      ></ion-input>
      <ion-input
        class="signin-input"
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
.signin {
  @apply flex flex-col items-center justify-center h-full;
}

.signin-input {
  @apply w-1/2;
}
</style>
