<script setup lang="ts">
import {
  DEFAULT_PROFILE_FIELD,
  PICKER_OPTIONS,
  ProfileField,
  ProfileFieldType,
  UserFormMode
} from '@/components/user-form/type';
import { IonInput, IonItem, IonLabel, IonTextarea } from '@ionic/vue';
import { usePicker } from '@/composables/use-picker';
import { Icon } from '@iconify/vue';
import { useModal } from '@/composables/use-modal';
import DatePicker from '@/components/date-picker/index.vue';
import { ref } from 'vue';
import { format } from 'date-fns';

interface IProps {
  mode: UserFormMode;
  field: ProfileField;
  value: string;
  isAdmin?: boolean;
  isPrivacy?: boolean;
  isSelfForm?: boolean;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'change', val?: string): void;
}>();

// Picker
const optionPlaceholder = '请选择';
const options =
  PICKER_OPTIONS.find((i) => i.label == props.field.label)?.options || [];
const picker = usePicker(options, props.value);
const openOptionPicker = async () => {
  await picker.open();
  if (picker.picked.value) emit('change', picker.picked.value);
};

// DatePicker
const datePicker = useModal();
const datePicked = ref(props.value);
const OpenDatePicker = async () => {
  const data = await datePicker.open({
    component: DatePicker,
    cssClass: 'datepicker'
  });
  if (data) {
    datePicked.value = format(data.value, 'yyyy-MM-dd');
    emit('change', datePicked.value);
  }
};
</script>

<template>
  <IonItem
    v-if="
      (!isAdmin && !field.isPrivacy && !isPrivacy) ||
      (isAdmin && !field.isPrivacy && !isPrivacy) ||
      (isAdmin && field.isPrivacy && isPrivacy) ||
      isSelfForm
    "
    lines="none"
    :class="field.isSimple ? 'w-1/2' : 'w-full'"
  >
    <!-- LABEL -->
    <IonLabel :class="field.isSimple ? 'w-1/2' : 'w-1/4'">
      <div class="flex items-center">
        <Icon
          class="block w-[16px]"
          :icon="field.iconifyName ?? DEFAULT_PROFILE_FIELD.iconifyName"
        />
        <span class="ml-2">{{ field.label }}</span>
      </div>
    </IonLabel>

    <!-- TEXT OR INPUT -->
    <template v-if="mode === UserFormMode.READ">
      <span
        class="flex items-center justify-evenly"
        :class="field.isSimple ? '' : 'w-3/4'"
      >
        {{ value ?? '无' }}
      </span>
    </template>
    <template v-else>
      <template
        v-if="field.type == ProfileFieldType.DEFAULT_TEXT || !field.type"
      >
        <IonInput
          :placeholder="'请填写'"
          :value="value"
          class="border border-grey-300 rounded-lg text-center w-3/4"
          @change="
            (e: Event) => {
              const target = e.target as HTMLInputElement;
              if (target) {
                emit('change', target.value);
              }
            }
          "
        />
      </template>
      <template v-else-if="field.type == ProfileFieldType.OPTIONS">
        <IonInput
          :placeholder="optionPlaceholder"
          :value="picker.picked.value"
          class="border border-grey-300 rounded-lg text-center w-3/4"
          @click="openOptionPicker"
        />
      </template>
      <template v-else-if="field.type == ProfileFieldType.DATE">
        <IonInput
          :placeholder="optionPlaceholder"
          :value="datePicked"
          class="border border-grey-300 rounded-lg text-center w-3/4"
          @click="OpenDatePicker"
        />
      </template>
      <template v-else-if="field.type == ProfileFieldType.TEXTAREA">
        <IonTextarea
          :placeholder="'请填写'"
          :value="value"
          auto-grow
          :maxlength="50"
          class="border border-grey-300 rounded-lg text-center w-3/4"
        ></IonTextarea>
      </template>
      <template v-else-if="field.type == ProfileFieldType.CHECKBOX">
        <input
          type="checkbox"
          class="w-3/4"
          @change="
            (e: Event) => {
              const target = e.target as HTMLInputElement;
              if (target) {
                emit('change', target.checked.toString());
              }
            }
          "
        />
      </template>
    </template>
  </IonItem>
</template>

<style scoped></style>
