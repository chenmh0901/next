<script setup lang="ts">
import { IonInput, IonList } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';

interface IProps {
  user: User;
  formMode: FormMode;
  changeMode: () => void;
}

type FormMode = 'EDIT' | 'VIEW';
const formMode = ref<FormMode>();
const props = defineProps<IProps>();

const user = computed(() => {
  const u = { ...props.user } as any;
  const keys = Object.keys(u) as Array<keyof User>;
  console.log(u);
  console.log(keys);
  keys.forEach((k) => {
    console.log(u[k]);
    if (!u[k]) {
      u[k] = '未填写';
      console.log(k);
    }
  });
  return u;
});
</script>

<template>
  <ion-list v-if="user">
    <ion-item lines="none">
      <ion-item style="margin: 0; padding: 0" lines="none">
        <label style="width: 40%">姓名:</label>
        <ion-input
          :value="user.name"
          :disabled="!props.edit"
          style="width: 60%"
        ></ion-input>
      </ion-item>
      <ion-item style="margin: 0; padding: 0" lines="none">
        <label style="width: 40%">性别:</label>
        <ion-input
          :value="user.sex"
          :disabled="!props.edit"
          style="width: 60%"
        ></ion-input>
      </ion-item>
    </ion-item>
    <ion-item lines="none">
      <ion-item style="margin: 0; padding: 0" lines="none">
        <label style="width: 40%">班级:</label>
        <ion-input
          :value="user.class"
          :disabled="!props.edit"
          style="width: 60%"
        ></ion-input>
      </ion-item>
      <ion-item style="margin: 0; padding: 0" lines="none">
        <label style="width: 40%">寝室:</label>
        <ion-input
          :value="user.room"
          :disabled="!props.edit"
          style="width: 60%"
        ></ion-input>
      </ion-item>
    </ion-item>
    <ion-item lines="none">
      <label>学号:</label>
      <ion-input :value="user.no" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>生日:</label>
      <ion-input :value="user.birthday" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>籍贯:</label>
      <ion-input :value="user.birthPlace" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>手机:</label>
      <ion-input :value="user.phone" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>微信:</label>
      <ion-input :value="user.QQ" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>QQ:</label>
      <ion-input :value="user.QQ" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>邮箱:</label>
      <ion-input :value="user.email" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>简介:</label>
      <ion-input :value="user.resume" :disabled="!props.edit"></ion-input>
    </ion-item>
    <ion-button
      expand="block"
      color="primary"
      @click="changeMode"
      v-if="!props.edit"
      >编辑
    </ion-button>
    <ion-button expand="block" color="primary" @click="changeMode" v-else
      >保存
    </ion-button>
  </ion-list>
</template>

<style scoped>
ion-item {
  margin: 10px 0;
  padding: 10px;
}

label {
  margin-left: 20px;
  width: 20%;
}

ion-input {
  border: solid 1px grey;
  border-radius: 10px;
  text-align: center;
  width: 80%;
}
</style>
