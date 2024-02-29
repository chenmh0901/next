<script setup lang="ts">
import {
  DEFAULT_PROFILE_FIELD,
  PICKER_OPTIONS,
  ProfileField,
  ProfileFieldType,
  UserFormMode
} from '@/components/user-form/type';
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import { usePicker } from '@/composables/use-picker';
import { Icon } from '@iconify/vue';

interface IProps {
  mode: UserFormMode;

  field: ProfileField;
  value: string;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'change', val?: string): void;
}>();

const optionPlaceholder = '请选择';
const options =
  PICKER_OPTIONS.find((i) => i.label == props.field.label)?.options || [];
const { picked, open } = usePicker(options, props.value);

const onClick = async () => {
  await open();
  if (picked.value) emit('change', picked.value);
};
</script>

<template>
  <IonItem lines="none">
    <!-- LABEL -->
    <IonLabel class="w-1/4">
      <template class="flex items-center">
        <Icon
          class="block w-[16px]"
          :icon="field.iconifyName ?? DEFAULT_PROFILE_FIELD.iconifyName"
        />
        <span class="ml-2">{{ field.label }}</span>
      </template>
    </IonLabel>

    <!-- TEXT OR INPUT -->
    <ion-text v-if="mode === UserFormMode.READ"
      >{{ value ?? '未填写' }}
    </ion-text>
    <template v-else>
      <template
        v-if="field.type == ProfileFieldType.DEFAULT_TEXT || !field.type"
      >
        <IonInput
          :placeholder="'未填写'"
          :value="value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
          @change="(e) => emit('change', e.target.value)"
        />
      </template>
      <template v-else-if="field.type == ProfileFieldType.OPTIONS">
        <IonInput
          :placeholder="optionPlaceholder"
          :value="picked"
          class="border border-grey-300 rounded-lg text-center w-4/5"
          @click="onClick"
        />
      </template>
    </template>
  </IonItem>
</template>

<style scoped></style>
