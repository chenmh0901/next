<script lang="ts" setup>
import { IonButton, IonList } from '@ionic/vue';
import {
  PROFILE_FIELDS,
  ProfileFieldType,
  UserFormMode
} from '@/components/profile/type';
import { User } from '@/types/user';
import { ref } from 'vue';
import UserFormItem from '@/components/profile/user-form-item.vue';
import { toast } from '@/utils/toast';

interface IProps {
  user: User;
  mode: UserFormMode;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update', val: User): void;
  (e: 'quit', val: UserFormMode): void;
}>();

const form = ref(props.user);

const onSave = () => {
  try {
    // await send patch message -> server
    toast('保存成功');
    emit('update', form.value);
  } catch (e) {
    // error
    console.error('Error', e);
  }
};
const quit = () => {
  emit('quit', { type: 'READ' });
};
</script>

<template>
  <IonList v-if="user" class="w-full">
    <UserFormItem
      v-for="field in PROFILE_FIELDS"
      :key="field.key"
      :mode="mode"
      :type="field.type ?? ProfileFieldType.DEFAULT_TEXT"
      :label="field.label"
      :value="form[field.key] as string"
      @change="
        (v) => {
          form[field.key] = v;
        }
      "
    />
    <template v-if="mode.type == 'EDIT'">
      <IonButton expand="block" @click="onSave">保存</IonButton>
      <IonButton expand="block" @click="quit">退出</IonButton>
    </template>
  </IonList>
</template>

<style scoped></style>
