<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
  <div v-show="true" class="global-test-region" @click="debug" />
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { createAndShareCsv } from '@/utils/share';
const debug = () => {
  const user = [
    {
      id: 1,
      no: 1234512345,
      name: '浣熊',
      password: '',
      isAdmin: false,
      email: 'nestaliy@666.com',
      phone: '19112341234',
      qq: '6666666666',
      wechat: '15212341234',
      sex: '',
      birthday: '',
      avatar: '1',
      className: '数媒212',
      roomName: '8-324',
      address: '浣能镇立本街道15-213',
      birthPlace: '西安浣能镇',
      selfResume: '没有更多信息了!',
      adminResume: '123456781234455'
    },
    {
      id: 1,
      no: 1234512345,
      name: '浣熊',
      password: '',
      isAdmin: false,
      email: 'nestaliy@666.com',
      phone: '19112341234',
      qq: '6666666666',
      wechat: '15212341234',
      sex: '',
      birthday: '',
      avatar: '1',
      className: '数媒212',
      roomName: '8-324',
      address: '浣能镇立本街道15-213',
      birthPlace: '西安浣能镇',
      selfResume: '没有更多信息了!',
      adminResume: '123456781234455'
    }
  ];
  createAndShareCsv(user);
};
</script>

<style scoped>
.global-test-region {
  @apply absolute right-0 bottom-0 bg-red-100 w-24 h-24;
}
</style>
