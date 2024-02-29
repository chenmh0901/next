<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import UserForm from '@/components/user-form/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import { UserFormMode } from '@/components/user-form/type';

// about view and view model
const mode = ref<UserFormMode>(UserFormMode.READ);
const handleUpdate = (u: User) => {
  mode.value = UserFormMode.READ;
  if (u) {
    patchUserInfo(u);
  }
};
const handleCancel = () => {
  mode.value = UserFormMode.READ;
};

// user-form data
const user = ref<User>();
const avatar = ref<string>('1');
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
      <UserForm
        v-if="user && avatar"
        class="mb-2"
        :user="user"
        :avatar="avatar"
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

.profile__avatar {
  @apply mb-2 mt-2;
}
</style>
