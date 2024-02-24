<script setup lang="ts">
import { ProfileFieldType } from '@/components/profile/type';
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import { ref } from 'vue';
import { usePicker } from '@/composables/use-picker';

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

const inputPlaceholder = ref('未填写');
const optionPlaceholder = ref('请选择');
const { picked, open } = usePicker(['数媒211', '数媒212'], props.value);

const onClick = () => {
  open();
  emit('change', picked.value);
};
</script>

<template>
  <IonItem class="my-4" lines="none">
    <IonLabel class="w-1/5">{{ label }}:</IonLabel>

    <ion-text v-if="mode === UserFormMode.VIEW"
      >{{ value ?? inputPlaceholder }}
    </ion-text>
    <template v-else>
      <template v-if="type == ProfileFieldType.DEFAULT_TEXT">
        <IonInput
          :placeholder="inputPlaceholder"
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
