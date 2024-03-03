<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import UserForm from '@/components/user-form/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import { UserFormMode } from '@/components/user-form/type';
import AvatarUpload from '@/components/avatar-upload/index.vue';

// about view and view model
const mode = ref<UserFormMode>(UserFormMode.READ);
const handleUpdate = (val: User) => {
  mode.value = UserFormMode.READ;
  patchUserInfo(val);
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
      <footer>
        <IonButton
          v-if="mode == UserFormMode.READ"
          class="default-action-btn"
          @click="mode = UserFormMode.EDIT"
          >编辑
        </IonButton>
        <AvatarUpload v-slot="props">
          <IonButton @click="props.upload">你好</IonButton>
        </AvatarUpload>
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
