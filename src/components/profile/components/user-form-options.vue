<script setup lang="ts">
import { IonButton, IonPicker } from '@ionic/vue';
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  values: string[];
}>();

const pickerColumns = computed(() => [
  {
    name: props.label,
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
    handler: (val: string) => {
      console.log(`You selected: ${val}`);
    }
  }
];
</script>

<template>
  <ion-button :id="label">{{ label }}</ion-button>
  <ion-picker :trigger="label" :columns="pickerColumns" :buttons="pickerBtns" />
</template>

<style scoped></style>
