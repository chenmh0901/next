<script lang="ts" setup>
import { IonButton, IonList, modalController } from '@ionic/vue';
import { ProfileField, UserFormMode } from '@/components/user-form/type';
import { User } from '@/types/user';
import { ref } from 'vue';
import { IHttpOptions, useHttp } from '@/utils/http';
import { toast } from '@/utils/toast';
import { validate } from '@components/user-form/validator';

import UserFormItem from '@/components/user-form/user-form-item.vue';
interface IProps {
  user: User;
  isAdmin: boolean;
  isPrivacy: boolean;
  profileFields: ProfileField[];
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
  modalController.dismiss(false);
};
</script>

<template>
  <IonList v-if="user" class="user-form">
    <UserFormItem
      v-for="field in props.profileFields"
      :key="field.key"
      :field="field"
      :mode="mode"
      :value="form[field.key] as string"
      :is-admin="isAdmin"
      :is-privacy="isPrivacy"
      @change="
        (v) => {
          form[field.key] = v;
        }
      "
    />
    <footer
      v-if="isAdmin || !isPrivacy"
      class="mt-auto flex justify-evenly mb-5 w-full"
    >
      <template v-if="mode == UserFormMode.READ">
        <IonButton class="user-form__btn" color="medium" @click="onCancel"
          >退出</IonButton
        >
        <IonButton class="user-form__btn" @click="mode = UserFormMode.EDIT"
          >编辑</IonButton
        >
      </template>
      <template v-else>
        <IonButton
          class="user-form__btn"
          color="medium"
          @click="mode = UserFormMode.READ"
          >取消</IonButton
        >
        <IonButton class="user-form__btn" @click="onSave">保存</IonButton>
      </template>
    </footer>
  </IonList>
</template>

<style scoped>
.user-form {
  @apply w-full rounded-lg h-full flex flex-wrap;
}
.user-form__btn {
  @apply w-1/3;
}
</style>
