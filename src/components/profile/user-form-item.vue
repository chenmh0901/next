<script setup lang="ts">
import {
  PICKER_OPTIONS,
  ProfileFieldType,
  UserFormMode
} from '@/components/profile/type';
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import { usePicker } from '@/composables/use-picker';

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

const optionPlaceholder = '请选择';
const options =
  PICKER_OPTIONS.find((i) => i.label == props.label)?.options || [];
const { picked, open } = usePicker(options, props.value);

const onClick = async () => {
  await open();
  if (picked.value) emit('change', picked.value);
};
</script>

<template>
  <IonItem class="my-4" lines="none">
    <IonLabel class="w-1/5">{{ label }}:</IonLabel>

    <ion-text v-if="mode.type === 'READ'"
      >{{ value ?? mode.placeholder }}
    </ion-text>
    <template v-else>
      <template v-if="type == ProfileFieldType.DEFAULT_TEXT">
        <IonInput
          :placeholder="mode.placeholder"
          :value="value"
          class="border border-grey-300 rounded-lg text-center w-4/5"
          @change="(e) => emit('change', e.target.value)"
        />
      </template>

      <template v-else-if="type == ProfileFieldType.OPTIONS">
        <IonInput
          :placeholder="optionPlaceholder"
          :value="picked"
          class="border border-grey-300 rounded-lg text-center w-4/5"
          @click="onClick()"
        />
      </template>
      <template v-else-if="type == ProfileFieldType.DATE"></template>
    </template>
  </IonItem>
</template>

<style scoped></style>
