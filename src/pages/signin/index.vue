<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { onBeforeMount, ref } from 'vue';
import { pageTo } from '@/router/director';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { IHttpOptions, IUserResponse, useHttp } from '@/utils/http';
import { AuthForm } from '@/pages/signin/type';
import { useAuthStore } from '@/stores/auth';
import { toast } from '@/utils/toast';
import { validate } from '@/pages/signin/validator';
import { useUserStore } from '@/stores/user';

enum PageMode {
  SIGNIN = 'login',
  SIGNUP = 'register'
}

const form = ref<AuthForm>({} as AuthForm);
const { val, toggle } = useEasyToggle([PageMode.SIGNIN, PageMode.SIGNUP]);

const authStore = useAuthStore();
const userStore = useUserStore();
const register = async (data: AuthForm) => {
  const options: IHttpOptions<AuthForm> = {
    method: 'post',
    path: 'auth/' + PageMode.SIGNUP,
    data: data
  };
  try {
    await useHttp(options);
    return await auth({ no: data.no, password: data.password });
  } catch (e) {
    await toast('注册失败');
  }
};
const auth = async (data: AuthForm) => {
  const options: IHttpOptions<AuthForm> = {
    method: 'post',
    path: 'auth/' + PageMode.SIGNIN,
    data: data
  };
  try {
    const res = (await useHttp(options)) as IUserResponse;
    return res.data;
  } catch (e) {
    await toast('登录失败');
  }
};
const getUserAndSetInStore = async () => {
  const option: IHttpOptions<[]> = {
    path: 'user/me',
    method: 'get'
  };
  const user = (await useHttp(option)) as IUserResponse;
  await userStore.setUser(user.data);
};
const redirectWithToken = async (t: string) => {
  await authStore.setToken(t);
  await getUserAndSetInStore();
  pageTo('home');
};
const onClick = async () => {
  if (!(await validate(form.value, val.value))) return;
  if (val.value === PageMode.SIGNUP) {
    register(form.value).then((r) => {
      if (r?.token) {
        redirectWithToken(r.token as string);
      }
    });
  } else {
    auth(form.value).then((r) => {
      if (r?.token) {
        redirectWithToken(r.token as string);
      }
    });
  }
};

const ChangeMode = () => {
  toggle();
  form.value = {} as AuthForm;
};

onBeforeMount(() => {
  authStore.getToken().then((val) => {
    if (val?.length) pageTo('home');
  });
});
</script>

<template>
  <IonContent>
    <div class="signin">
      <template v-if="val === PageMode.SIGNIN">
        <h1>登入芸馆💡</h1>
        <IonInput
          class="signin-input"
          :value="form.no"
          placeholder="输入您的账号"
          @ion-input="form.no = $event.target.value as string"
        ></IonInput>
        <IonInput
          class="signin-input"
          :value="form.password"
          placeholder="输入您的密码"
          type="password"
          @ion-input="form.password = $event.target.value as string"
        ></IonInput>
        <IonButton @click="onClick">登录</IonButton>
        <p>还未有账号?<i @click="ChangeMode()">去注册</i></p>
      </template>
      <template v-else>
        <h1>注册💡</h1>
        <IonInput
          class="signin-input"
          :value="form.no"
          placeholder="输入您的学号"
          @ion-input="form.no = $event.target.value as string"
        ></IonInput>
        <IonInput
          class="signin-input"
          :value="form.name"
          placeholder="输入您的姓名"
          @ion-input="form.name = $event.target.value as string"
        ></IonInput>
        <IonInput
          class="signin-input"
          :value="form.password"
          placeholder="输入您的密码"
          type="password"
          @ion-input="form.password = $event.target.value as string"
        ></IonInput>
        <IonButton @click="onClick">注册并登入</IonButton>
        <p>已有账号?<i @click="ChangeMode()">去登入</i></p>
      </template>
    </div>
  </IonContent>
</template>

<style scoped>
.signin {
  @apply flex flex-col items-center justify-center h-full;
}

.signin-input {
  @apply w-1/2;
}
</style>
