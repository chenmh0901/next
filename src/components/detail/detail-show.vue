<script setup lang="ts">
import { IonInput } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';

interface IProps {
  user: User;
}

const props = defineProps<IProps>();

const user = computed(() => {
  const u = { ...props.user } as any;
  const keys = Object.keys(u) as Array<keyof User>;
  keys.forEach((k) => {
    if (!u[k]) u[k] = '未填写';
  });
  return u;
});
</script>

<template>
  <div v-if="user">
    <IonInput label="姓名" :value="user.name" disabled></IonInput>
    <IonInput label="微信" :value="user.wechat" disabled></IonInput>
    <IonInput label="QQ" :value="user.qq" disabled></IonInput>
    <IonInput label="手机" :value="user.phone" disabled></IonInput>
    <IonInput label="班级" :value="user.className" disabled></IonInput>
    <IonInput label="寝室号" :value="user.roomName" disabled></IonInput>
    <IonInput label="籍贯" :value="user.birthPlace" disabled></IonInput>
  </div>
</template>

<style scoped></style>
