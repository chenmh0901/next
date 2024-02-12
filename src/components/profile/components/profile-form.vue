<script lang="ts" setup>
import { IonInput, IonList, IonItem } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';
import { PROFILE_FIELDS } from '@/components/profile/components/profile-field';

interface IProps {
  user: User;
  formMode: FormMode;
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
    label: PROFILE_FIELDS.find((field) => field.key == key)?.label,
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
      <label class="w-1/5">{{ item.label }}: </label>
      <ion-input
        :disabled="formMode === 'VIEW'"
        :value="item.value"
        class="border border-grey-300 rounded-lg text-center w-4/5"
      ></ion-input>
    </ion-item>
    <ion-button
      v-if="formMode === 'VIEW'"
      color="primary"
      expand="block"
      @click="toggle"
      >编辑
    </ion-button>
    <ion-button v-else color="primary" expand="block" @click="toggle"
      >保存
    </ion-button>
  </ion-list>
</template>

<style scoped></style>
