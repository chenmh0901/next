<script lang="ts" setup>
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';
import {
  PROFILE_FIELDS,
  ProfileFieldType
} from '@/components/profile/components/profile-field';
import { format, parseISO } from 'date-fns';

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

const findField = (k: string) => {
  return PROFILE_FIELDS.find((field) => field.key == k);
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
    label: findField(key)?.label,
    value: u[key],
    type: findField(key)?.type
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
      <template v-if="item.type === ProfileFieldType.DATE">
        <ion-label class="w-1/5">{{ item.label }}:</ion-label>
        <ion-input
          :disabled="formMode === FormMode.VIEW"
          id="date"
          :value="item.value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
        ></ion-input>
        <ion-popover trigger="date" size="cover">
          <ion-datetime
            presentation="date"
            locale="zh-GB"
            :prefer-wheel="true"
            size="cover"
            @ionChange="
              (e) => {
                item.value = format(parseISO(e.detail.value), 'yyyy-MM-dd');
              }
            "
          ></ion-datetime>
        </ion-popover>
      </template>
      <template v-else-if="item.type === ProfileFieldType.SEX">
        <ion-label class="w-1/5">{{ item.label }}:</ion-label>
        <ion-input
          :disabled="formMode === FormMode.VIEW"
          :value="item.value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
        ></ion-input>
      </template>
      <template v-else-if="item.type === ProfileFieldType.CLASS">
        <ion-label class="w-1/5">{{ item.label }}:</ion-label>
        <ion-input
          :disabled="formMode === FormMode.VIEW"
          :value="item.value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
        ></ion-input>
      </template>
      <template v-else-if="item.type === ProfileFieldType.ROOM">
        <ion-label class="w-1/5">{{ item.label }}:</ion-label>
        <ion-input
          :disabled="formMode === FormMode.VIEW"
          :value="item.value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
        ></ion-input>
      </template>
      <template v-else>
        <ion-label class="w-1/5">{{ item.label }}:</ion-label>
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
      >保存
    </ion-button>
  </ion-list>
</template>

<style scoped></style>
