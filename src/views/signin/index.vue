<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { onBeforeMount, ref } from 'vue';
import { pageTo } from '@/router/director';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { IHttpOptions, useHttp } from '@/utils/http';
import { AuthForm } from '@/views/signin/type';
import { useAuthStore } from '@/stores/auth';
import { toast } from '@/utils/toast';
import { validate } from '@/views/signin/validator';

enum PageMode {
  SIGNIN = 'login',
  SIGNUP = 'register'
}

const form = ref<AuthForm>({} as AuthForm);
const { val, toggle } = useEasyToggle([PageMode.SIGNIN, PageMode.SIGNUP]);

const authStore = useAuthStore();

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
    await toast(e.response.data.toString());
  }
};
const auth = async (data: AuthForm) => {
  const options: IHttpOptions<AuthForm> = {
    method: 'post',
    path: 'auth/' + PageMode.SIGNIN,
    data: data
  };
  try {
    const res = await useHttp(options);
    return res.data;
  } catch (e) {
    await toast(e.response.data.toString());
  }
};
const onClick = async () => {
  if (!(await validate(form.value, val.value))) return;
  if (val.value === PageMode.SIGNUP) {
    /**
     * TODO 注册 || 登入
     */
    register(form.value).then((r) => {
      if (r?.token) {
        authStore.setToken(r.token);
        pageTo('home');
      }
    });
  } else {
    auth(form.value).then((r) => {
      if (r?.token) {
        authStore.setToken(r.token);
        pageTo('home');
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
    if (val?.length > 0) pageTo('home');
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
          placeholder="输入您的学号或者邮箱"
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
