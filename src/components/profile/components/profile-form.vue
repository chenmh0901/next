<script lang="ts" setup>
import { IonInput, IonList, IonItem } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';

interface IProps {
  user: User;
  formMode: FormMode;
  toggle: () => void;
}

type FormMode = 'EDIT' | 'VIEW';

const props = defineProps<IProps>();


const user = computed(() => {
  const u = { ...props.user } as any;
  const keys = Object.keys(u) as Array<keyof User>;
  keys.forEach((k) => {
    if (!u[k]) {
      u[k] = '未填写';
    }
  });
  return u;
});
</script>

<template>
  <ion-list v-if="user">
    <ion-item lines="none">
      <ion-item lines="none" style="margin: 0; padding: 0">
        <label style="width: 40%">姓名:</label>
        <ion-input
          :disabled="formMode==='VIEW'"
          :value="user.name"
          style="width: 60%"
        ></ion-input>
      </ion-item>
      <ion-item lines="none" style="margin: 0; padding: 0">
        <label style="width: 40%">性别:</label>
        <ion-input
          :disabled="formMode==='VIEW'"
          :value="user.sex"
          style="width: 60%"
        ></ion-input>
      </ion-item>
    </ion-item>
    <ion-item lines="none">
      <ion-item lines="none" style="margin: 0; padding: 0">
        <label style="width: 40%">班级:</label>
        <ion-input
          :disabled="formMode==='VIEW'"
          :value="user.class"
          style="width: 60%"
        ></ion-input>
      </ion-item>
      <ion-item lines="none" style="margin: 0; padding: 0">
        <label style="width: 40%">寝室:</label>
        <ion-input
          :disabled="formMode==='VIEW'"
          :value="user.room"
          style="width: 60%"
        ></ion-input>
      </ion-item>
    </ion-item>
    <ion-item lines="none">
      <label>学号:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.no"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>生日:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.birthday"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>籍贯:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.birthPlace"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>手机:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.phone"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>微信:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.QQ"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>QQ:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.QQ"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>邮箱:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.email"></ion-input>
    </ion-item>
    <ion-item lines="none">
      <label>简介:</label>
      <ion-input :disabled="formMode==='VIEW'" :value="user.resume"></ion-input>
    </ion-item>
    <ion-button
      v-if="formMode==='VIEW'"
      color="primary"
      expand="block"
      @click="toggle"
    >编辑
    </ion-button>
    <ion-button v-else color="primary" expand="block"
                @click="toggle"
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
