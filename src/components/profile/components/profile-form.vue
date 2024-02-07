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
    <ion-item
      v-for="(item, key) in userWithLabels"
      :key="key"
      class="my-4"
      lines="none"
    >
      <template v-if="key.field == 'input'">
        <label class="w-1/5">{{ key.label }}:</label>
        <ion-input
          :disabled="formMode === FormMode.VIEW"
          :value="item.value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
        ></ion-input>
      </template>
    </ion-item>
    <ion-button
      v-if="formMode === FormMode.VIEW"
      color="primary"
      expand="block"
      @click="toggle"
      >编辑
    </ion-button>
    <ion-button v-else color="primary" expand="block" @click="toggle"
      >保存</ion-button
    >
  </ion-list>
</template>

<style scoped></style>
