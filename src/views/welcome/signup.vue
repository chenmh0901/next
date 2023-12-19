<script setup lang="ts">
import { IonButton, IonContent, IonInput, IonText } from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';
import { pageTo } from '@/router/director';
import { toast } from '@/utils/toast';
import { useAuthStore } from '@/stores/auth.store';
import { useDevStore } from '@/stores/dev.store';

interface RegForm {
  no: string;
  password: string;
  email: string;
}

const dev = useDevStore();
const authStore = useAuthStore();

const form = ref<RegForm>({
  no: '',
  password: '',
  email: ''
});

const validate = (f: RegForm) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (f.no.length === 0) {
    toast('学号不能为空');
  } else if (f.no.length !== 10) {
    toast('请输入正确的学号格式');
  } else if (f.password.length === 0) {
    toast('请输入密码');
  } else if (f.password.length < 6) {
    toast('请输入更安全的密码');
  } else if (f.email?.length === 0) {
    toast('请输入邮箱');
  } else if (f.email && !emailPattern.test(f.email)) {
    toast('请输入正确的邮箱格式');
  } else {
    return true;
  }
  return false;
};

const submit = async () => {
  if (!validate(form.value)) {
    return;
  }

  // 注册
  const config = {
    url: `http://localhost:3000/auth/signup`,
    method: 'post',
    data: {
      no: form.value.no,
      password: form.value.password,
      email: form.value.email
    },
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*'
    }
  };
  try {
    await axios(config);
  } catch (e) {
    toast('注册失败');
    return;
  }

  // 登录
  config.url = `http://localhost:3000/auth/signin`;
  axios(config)
    .then((res: { data: { access_token: string } }) => {
      if (res.data.access_token) {
        authStore.setToken(res.data.access_token ?? '');
        toast('登录成功', 1500);
        pageTo('/detail');
      } else {
        toast('登录错误，请联系管理员', 1500);
      }
    })
    .catch((err) => {
      dev.log(err);
      toast('登录失败', 1500);
    });
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
          :value="form.no"
          @ion-input="form.no = $event.target.value as string"
          type="text"
          :clear-input="true"
        ></ion-input>
        <ion-input
          placeholder="输入您的密码"
          label="密码"
          :value="form.password"
          @ion-input="form.password = $event.target.value as string"
          type="password"
        ></ion-input>
        <ion-input
          placeholder="输入您的邮箱"
          label="邮箱"
          :value="form.email"
          @ion-input="form.email = $event.target.value as string"
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
