<script lang="ts" setup>
import { IonInput, IonList, IonItem } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';

interface IProps {
  user: User;
  formMode: string;
  toggle: () => void;
}

enum FormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

const props = defineProps<IProps>();

const labelMappings = {
  name: '姓名',
  wechat: '微信',
  sex: '性别',
  class: '班级',
  room: '寝室',
  no: '学号',
  birthday: '生日',
  birthPlace: '籍贯',
  phone: '手机',
  QQ: 'QQ',
  email: '邮箱',
  resume: '简介'
};

const userWithLabels = computed(() => {
  const u = { ...props.user } as any;
  const keys = Object.keys(u) as Array<keyof User>;
  const filteredKeys = keys.filter((k) => k !== 'id' && k !== 'admin');
  filteredKeys.forEach((k) => {
    if (!u[k]) {
      u[k] = '未填写';
    }
  });
  return filteredKeys.map((key) => ({
    label: labelMappings[key],
    value: u[key]
  }));
});
</script>

<template>
  <ion-list v-if="user" class="w-full">
    <ion-item v-for="(item, key) in userWithLabels" :key="key" class="my-4" lines="none">
      <label class="w-1/5">{{ item.label }}:</label>
      <ion-input
        :disabled="formMode === FormMode.VIEW"
        :value="item.value"
        class="border border-grey-300 rounded-lg text-center w-4/5"
      ></ion-input>
    </ion-item>
    <ion-button
      v-if="formMode === FormMode.VIEW"
      color="primary"
      expand="block"
      @click="toggle"
    >编辑
    </ion-button>
    <ion-button v-else color="primary" expand="block" @click="toggle">保存</ion-button>
  </ion-list>
</template>

<style scoped></style>
