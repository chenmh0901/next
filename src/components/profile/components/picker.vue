<script setup lang="ts">
import { IonDatetime, IonPicker } from '@ionic/vue';
import { computed, ref } from 'vue';
import { PICKER_COLUMNS, ProfileFieldType } from '@/components/profile/type';

interface IProps {
  type: ProfileFieldType;
}

//type用于判断类型
const props = defineProps<IProps>();

//将最底层的值一层一层抛出去
const emit = defineEmits<{
  (e: 'select', val: any): void;
}>();

const dateTime = ref();

//picker组件需要的column
const column = computed(() => {
  return PICKER_COLUMNS.find((k) => k.type == props.type)?.column;
});
</script>

<template>
  <template v-if="props.type === ProfileFieldType.DATE">
    <ion-datetime
      presentation="date"
      locale="zh-GB"
      size="cover"
      @ionChange="
        (e) => {
          dateTime = e.detail.value;
          emit('select', dateTime);
        }
      "
    ></ion-datetime>
  </template>
  <template v-else>
    <ion-picker :columns="column" :is-open="true"></ion-picker>
  </template>
</template>

<style scoped></style>
