<script lang="ts" setup>
import { IonButton, IonList } from '@ionic/vue';
import { PROFILE_FIELDS, UserFormMode } from '@/components/user-form/type';
import { User } from '@/types/user';
import UserFormItem from '@/components/user-form/user-form-item.vue';
import { toast } from '@/utils/toast';
import { clone } from 'lodash';
import { ref } from 'vue';
import Avatar from '@/components/avatar/index.vue';

interface IProps {
  user: User;
  mode: UserFormMode;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update', val: { form: User; avatarUrl: string }): void;
  (e: 'cancel'): void;
}>();

const AVATAR_URL = `http://119.12.173.244:8080/user/${props.user.id}/avatar`;

const form = ref<User>(clone(props.user));
const avatarUrl = ref<string>(clone(AVATAR_URL));
const onSave = () => {
  try {
    toast('保存成功');
    emit('update', { form: form.value, avatarUrl: avatarUrl.value });
  } catch (e) {
    console.error('Error', e);
  }
};
const onCancel = () => {
  form.value = clone(props.user);
  avatarUrl.value = clone(AVATAR_URL);
  emit('cancel');
};

// handle avatar click
const handleAvatarClick = async (v: string) => {
  avatarUrl.value = v;
};
</script>

<template>
  <IonList v-if="user" class="user-form">
    <div class="user-form__avatar mb-2 mt-2 flex justify-center">
      <Avatar
        :src="avatarUrl"
        :size="90"
        :editable="mode == UserFormMode.EDIT"
        @update="handleAvatarClick"
      />
    </div>
    <UserFormItem
      v-for="field in PROFILE_FIELDS"
      :key="field.key"
      class="my-2"
      :field="field"
      :mode="mode"
      :value="form[field.key] as string"
      @change="
        (v) => {
          form[field.key] = v;
        }
      "
    />
    <footer v-if="mode == UserFormMode.EDIT" class="mt-2 flex justify-evenly">
      <IonButton class="default-action-btn" color="medium" @click="onCancel"
        >退出
      </IonButton>
      <IonButton class="default-action-btn" @click="onSave">保存</IonButton>
    </footer>
  </IonList>
</template>

<style scoped>
.user-form {
  @apply w-full rounded-lg;
}
</style>
