<script setup lang="ts">
import { IonButton, IonContent, IonInput, IonText } from '@ionic/vue';
import { ref } from 'vue';

// TODO 点击注册新账号按钮 -> 在此页面控制注册逻辑
const showSignupForm = ref(false);
</script>

<template>
  <ion-content>
    <div class="welcome-signup">
      <template v-if="showSignupForm">
        <h1>注册新账号</h1>
        <ion-input placeholder="输入您的账号"></ion-input>
        <ion-input placeholder="输入您的密码"></ion-input>
        <ion-button shape="round">点击注册新账号</ion-button>
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
