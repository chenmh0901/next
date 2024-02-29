<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import UserForm from '@/components/user-form/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import { UserFormMode } from '@/components/user-form/type';
import { upload } from '@/utils/upload';

// about view and view model
const mode = ref<UserFormMode>(UserFormMode.READ);
const handleUpdate = (val: { form: User; avatarUrl: string }) => {
  mode.value = UserFormMode.READ;
  if (val) {
    patchUserInfo(val.form);
    patchUserAvatar(val.avatarUrl);
  }
};
const handleCancel = () => {
  mode.value = UserFormMode.READ;
};

// user-form data
const user = ref<User>();
const fetchUserInfo = async () => {
  const option: IHttpOptions<User> = {
    path: 'user/me',
    method: 'get'
  };
  return await useHttp<User>(option);
};
const patchUserInfo = async (data: User) => {
  const option: IHttpOptions<User> = {
    path: 'user/',
    method: 'patch',
    data: data
  };
  return await useHttp(option);
};
//patch avatar
const patchUserAvatar = async (url: string) => {
  if (user.value) {
    const blob = await fetch(url).then((r) => r.blob());
    const path = 'user/' + user.value.id + '/avatar';
    const contentType = 'multipart/form-data';
    await upload(blob, path, contentType);
  }
};
const refresh = async () => {
  const { data } = await fetchUserInfo();
  user.value = data as User;
};
onMounted(refresh);
</script>

<template>
  <div class="profile">
    <div class="profile__content">
      <UserForm
        v-if="user"
        class="mb-2"
        :user="user"
        :mode="mode"
        @update="handleUpdate"
        @cancel="handleCancel"
      />
      <IonButton
        v-if="mode == UserFormMode.READ"
        class="default-action-btn"
        @click="mode = UserFormMode.EDIT"
        >编辑
      </IonButton>
    </div>
  </div>
</template>

<style scoped>
.profile {
  @apply flex flex-col items-center;
}

.profile__content {
  @apply flex flex-col items-center w-[90%];
}
</style>
