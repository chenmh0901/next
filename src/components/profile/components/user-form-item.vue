<script setup lang="ts">
import { ProfileFieldType } from '@/components/profile/type';
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import UserFormOptions from '@/components/profile/components/user-form-options.vue';

enum UserFormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

interface IProps {
  type: ProfileFieldType;
  mode: UserFormMode;
  value: string;
  label: string;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'change', val?: string): void;
}>();
</script>

<template>
  <ion-item class="my-4" lines="none">
    <ion-label class="w-1/5">{{ label }}:</ion-label>

    <ion-text v-if="mode === UserFormMode.VIEW">{{ value }}</ion-text>
    <template v-else>
      <template v-if="type == ProfileFieldType.DEFAULT_TEXT">
        <ion-input
          :value="value"
          @change="(e) => emit('change', e.target.value)"
          class="border border-grey-300 rounded-lg text-center w-4/5"
        />
      </template>

      <template v-else-if="type == ProfileFieldType.OPTIONS">
        <user-form-options
          v-if="label == '性别'"
          :values="['男', '女']"
          label="性别"
        />
        <user-form-options
          v-else-if="label == '班级'"
          :values="['数媒211', '数媒212']"
          label="班级"
        />
      </template>
      <template v-else-if="type == ProfileFieldType.DATE"></template>
    </template>
  </ion-item>
</template>

<style scoped></style>
