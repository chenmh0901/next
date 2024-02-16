<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { onBeforeMount, ref } from 'vue';
import { pageTo } from '@/router/director';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { useHttp, IHttpOptions } from '@/utils/http';
import { AuthForm } from '@/views/signin/type';
import { useAuthStore } from '@/stores/auth';

enum PageMode {
  SIGNIN = 'login',
  SIGNUP = 'register'
}

const form = ref<AuthForm>({} as AuthForm);
const { val, toggle } = useEasyToggle([PageMode.SIGNIN, PageMode.SIGNUP]);

const authStore = useAuthStore();

const auth = async (data: AuthForm) => {
  const options: IHttpOptions<AuthForm> = {
    method: 'post',
    path: 'auth/',
    data: data
  };
  if (val.value === PageMode.SIGNIN) {
    options.path += PageMode.SIGNIN;
  }

  if (val.value === PageMode.SIGNUP) {
    options.path += PageMode.SIGNUP;
  }

  try {
    const res = await useHttp(options);
    return res.data;
  } catch (e) {
    console.log('Error', e);
  }
};
const onClick = async () => {
  // if (await validate()) {
  //   pageTo('home');
  // }
  auth(form.value).then((res) => {
    if (res?.token) {
      authStore.setToken(res.token);
    }
  });
};

const validate = async () => {
  if (form.value.no == 'test' && form.value.password == 'admin123') {
    return true;
  }
  return false;
};

const ChangeMode = () => {
  toggle();
  form.value = {} as AuthForm;
};

onBeforeMount(() => {
  authStore.getToken().then((val) => {
    if (val?.length > 0) pageTo('home');
  });
});
</script>

<template>
  <ion-content>
    <div class="signin">
      <template v-if="val === PageMode.SIGNIN">
        <h1>登入芸馆💡</h1>
        <ion-input
          class="signin-input"
          :value="form.no"
          @ion-input="form.no = $event.target.value as string"
          placeholder="输入您的账号"
        ></ion-input>
        <ion-input
          class="signin-input"
          :value="form.password"
          @ion-input="form.password = $event.target.value as string"
          placeholder="输入您的密码"
          type="password"
        ></ion-input>
        <ion-button @click="onClick">登录</ion-button>
        <p>还未有账号?<i @click="ChangeMode()">去注册</i></p>
      </template>
      <template v-else>
        <h1>注册💡</h1>
        <ion-input
          class="signin-input"
          :value="form.no"
          @ion-input="form.no = $event.target.value as string"
          placeholder="输入您的学号或者邮箱"
        ></ion-input>
        <ion-input
          class="signin-input"
          :value="form.name"
          @ion-input="form.name = $event.target.value as string"
          placeholder="输入您的姓名"
        ></ion-input>
        <ion-input
          class="signin-input"
          :value="form.password"
          @ion-input="form.password = $event.target.value as string"
          placeholder="输入您的密码"
          type="password"
        ></ion-input>
        <ion-button @click="onClick">注册并登入</ion-button>
        <p>已有账号?<i @click="ChangeMode()">去登入</i></p>
      </template>
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
