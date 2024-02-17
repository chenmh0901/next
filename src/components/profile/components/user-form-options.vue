<script setup lang="ts">
import { IonButton, IonPicker } from '@ionic/vue';
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  values: string[];
}>();
const emit = defineEmits<{ (e: 'select', val?: string): void }>();
const pickerColumns = computed(() => [
  {
    name: 'option',
    options: props.values.map((v) => ({ text: v, value: v }))
  }
]);

const pickerBtns = [
  {
    text: '取消',
    role: 'cancel'
  },
  {
    text: '确认',
    handler: (val: any) => {
      emit('select', val.option.value);
    }
  }
];
</script>

<template>
  <div>
    <IonButton :id="label">{{ label }}</IonButton>
    <IonPicker
      :trigger="label"
      :columns="pickerColumns"
      :buttons="pickerBtns"
    />
  </div>
</template>

<style scoped></style>
