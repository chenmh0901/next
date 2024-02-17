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

defineProps<IProps>();
const emit = defineEmits<{
  (e: 'change', val?: string): void;
}>();
</script>

<template>
  <IonItem class="my-4" lines="none">
    <IonLabel class="w-1/5">{{ label }}:</IonLabel>

    <ion-text v-if="mode === UserFormMode.VIEW">{{ value }}</ion-text>
    <template v-else>
      <template v-if="type == ProfileFieldType.DEFAULT_TEXT">
        <IonInput
          :value="value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
          @change="(e) => emit('change', e.target.value)"
        />
      </template>

      <template v-else-if="type == ProfileFieldType.OPTIONS">
        <UserFormOptions
          v-if="label == '性别'"
          :values="['男', '女']"
          label="性别"
          @select="(v) => emit('change', v)"
        />
        <UserFormOptions
          v-else-if="label == '班级'"
          :values="['数媒211', '数媒212']"
          label="班级"
          @select="(v) => emit('change', v)"
        />
      </template>
      <template v-else-if="type == ProfileFieldType.DATE"></template>
    </template>
  </IonItem>
</template>

<style scoped></style>
