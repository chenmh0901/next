<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { useAuthStore } from '@/stores/auth.store';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { User } from '@/types/user';
import { toast } from '@/utils/toast';
const { getToken } = useAuthStore();

export interface IProps {
  editable?: boolean;
  userNo?: string;
}

const props = defineProps<IProps>();

const form = ref<User>();
// 获取表单
const fetchUserInfo = async (userNo?: string) => {
  const token = await getToken();
  const config = {
    url: `http://localhost:3000/user/${userNo ?? ''}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + token
    }
  };
  axios(config).then((res) => {
    form.value = res.data;
  });
};
onMounted(() => {
  fetchUserInfo(props.userNo);
});

// 提交
</script>

<template>
  <ion-content v-if="form">
    <ion-input label="姓名" :value="form.name" disabled></ion-input>
    <ion-input label="微信" :value="form.wechat" disabled></ion-input>
    <ion-input label="QQ" :value="form.QQ" disabled></ion-input>
    <ion-input label="手机" :value="form.phone" disabled></ion-input>
    <ion-input label="班级" :value="form.class" disabled></ion-input>
    <ion-input label="寝室号" :value="form.room" disabled></ion-input>
    <ion-input label="籍贯" :value="form.birthPlace" disabled></ion-input>
    <ion-button shape="round" @click="$emit('closeForm')">确认</ion-button>
  </ion-content>
</template>

<style scoped></style>
