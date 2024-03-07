<script lang="ts" setup>
import {
  IonButton,
  IonList,
  modalController,
  popoverController
} from '@ionic/vue';
import { PROFILE_FIELDS, UserFormMode } from '@/components/user-form/type';
import { User } from '@/types/user';
import { ref } from 'vue';
import { IHttpOptions, useHttp } from '@/utils/http';
import { toast } from '@/utils/toast';
import { validate } from '@components/user-form/validator';

import UserFormItem from '@/components/user-form/user-form-item.vue';
interface IProps {
  user: User;
  wrapperType: string;
}

const props = defineProps<IProps>();
const form = ref<User>(props.user);
const mode = ref<UserFormMode>(UserFormMode.READ);
const onSave = async () => {
  try {
    if (!(await validate(form.value))) return;
    const { data } = await patchUserInfo();
    if (data) {
      await toast('保存成功');
      mode.value = UserFormMode.READ;
    }
  } catch (e) {
    console.error('Error', e);
  }
};
const patchUserInfo = async () => {
  const option: IHttpOptions<User> = {
    path: 'user/',
    method: 'patch',
    data: form.value
  };
  return await useHttp(option);
};
const onCancel = () => {
  if (props.wrapperType === 'modal') {
    modalController.dismiss(false);
  } else if (props.wrapperType === 'popover') {
    popoverController.dismiss(false);
  }
};
</script>

<template>
  <IonList v-if="user" class="user-form">
    <UserFormItem
      v-for="field in PROFILE_FIELDS"
      :key="field.key"
      :field="field"
      :mode="mode"
      :value="form[field.key] as string"
      @change="
        (v) => {
          form[field.key] = v;
        }
      "
    />
    <footer class="mt-auto flex justify-evenly mb-5 w-full">
      <template v-if="mode == UserFormMode.READ">
        <IonButton color="medium" @click="onCancel">退出</IonButton>
        <IonButton @click="mode = UserFormMode.EDIT">编辑</IonButton>
      </template>
      <template v-else>
        <IonButton color="medium" @click="mode = UserFormMode.READ"
          >取消</IonButton
        >
        <IonButton @click="onSave">保存</IonButton>
      </template>
    </footer>
  </IonList>
</template>

<style scoped>
.user-form {
  @apply w-full rounded-lg h-full flex flex-wrap;
}
</style>
