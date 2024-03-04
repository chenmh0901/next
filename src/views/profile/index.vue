<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import UserForm from '@/components/user-form/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import { UserFormMode } from '@/components/user-form/type';
import AvatarUpload from '@/components/avatar-upload/index.vue';
import { toast } from '@/utils/toast';

// about view and view model
const mode = ref<UserFormMode>(UserFormMode.READ);
const handleUpdate = (val: User) => {
  mode.value = UserFormMode.READ;
  patchUserInfo(val);
};
const handleCancel = () => {
  mode.value = UserFormMode.READ;
};
// about avatar
const handleUploaded = async () => {
  await toast('上传成功');
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
      <footer class="flex justify-around w-full h-[400px]">
        <AvatarUpload
          v-if="mode === UserFormMode.READ"
          v-slot="props"
          @uploaded="handleUploaded"
        >
          <IonButton @click="props.upload">上传头像</IonButton>
        </AvatarUpload>
        <div v-if="mode == UserFormMode.READ">
          <IonButton @click="mode = UserFormMode.EDIT">编辑信息 </IonButton>
        </div>
      </footer>
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
