<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import UserForm from '@/components/profile/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import Avatar from '@/components/avatar/index.vue';
import { useCamera } from '@/composables/use-camara';
import { UserFormMode } from '@/components/profile/type';

// about view and view model
const mode = ref<UserFormMode>(UserFormMode.READ);
const handleUpdate = (v: User) => {
  mode.value = UserFormMode.READ;
  if (v) {
    patchUserInfo(v);
  }
};
const handleQuit = () => {
  mode.value = UserFormMode.READ;
};

// avatar
const { photo, takePhoto } = useCamera();

// user-form data
const user = ref<User>();
const fetchUserInfo = async () => {
  const option: IHttpOptions<[]> = {
    path: 'user/me',
    method: 'get'
  };
  return await useHttp(option);
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
      <div class="profile__avatar mb-2">
        <Avatar :src="photo.webviewPath" />
        <IonButton
          v-if="mode == UserFormMode.EDIT"
          size="small"
          @click="takePhoto"
          >上传照片
        </IonButton>
      </div>
      <UserForm
        v-if="user"
        class="mb-2"
        :user="user"
        :mode="mode"
        @update="handleUpdate"
        @cancel="handleQuit"
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

.profile__avatar {
  @apply flex flex-col items-center mt-5;
}
</style>
