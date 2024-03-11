<script lang="ts" setup>
import UserForm from '@components/user-form/user-form.vue';
import { ref } from 'vue';
import { User } from '@/types/user';
const user = ref<User>({
  id: 5,
  no: 1210204146,
  name: '浣熊',
  password: '',
  isAdmin: true,
  email: 'nestaliy@666.com',
  phone: '19112341234',
  qq: '6666666666',
  wechat: '15212341234',
  sex: '男',
  birthday: '2000-01-01',
  className: '数媒212',
  roomName: '8-324',
  avatar: '1',
  address: '浣能镇立本街道15-213',
  birthPlace: '西安浣能镇',
  selfResume:
    '没有更多信息了!没有更多信息了!没有更多信息了!没有更多信息了!没有更多信息了!没有更多信息了!',
  adminResume: '123456781234455'
});
</script>
<template>
  <ion-accordion-group>
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>个人信息</ion-label>
      </ion-item>
    </ion-accordion>
  </ion-accordion-group>
</template>
