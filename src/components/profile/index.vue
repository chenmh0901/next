<script lang="ts" setup>
import UserForm from '@/components/profile/components/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';

enum UserFormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

const mode = ref<UserFormMode>(UserFormMode.VIEW);
const user = ref<User>();

const fetchUserInfo = async () => {
  const option: IHttpOptions<any> = {
    path: 'user/me',
    method: 'get'
  };
  return await useHttp(option);
};

const patchUserInfo = async (data: User) => {
  const option: IHttpOptions<any> = {
    path: 'user/',
    method: 'patch',
    data: data
  };
  return await useHttp(option);
};

onMounted(() => {
  fetchUserInfo().then((r) => {
    user.value = r.data as User;
  });
});
</script>

<template>
  <div class="profile">
    <div class="profile__header">个人信息</div>
    <div class="profile__content">
      <UserForm
        v-if="!!user"
        :user="user"
        :mode="mode"
        @update="
          (v) => {
            mode = UserFormMode.VIEW;
            if (v) {
              patchUserInfo(v);
            }
          }
        "
      />
      <ion-button color="danger" @click="mode = UserFormMode.VIEW"
        >[DEBUG] 查看
      </ion-button>
      <ion-button color="danger" @click="mode = UserFormMode.EDIT"
        >[DEBUG] 编辑
      </ion-button>
    </div>
  </div>
</template>

<style scoped>
.profile {
  @apply flex flex-col items-center;
}

.profile__header {
  @apply h-20 text-2xl flex flex-col items-center justify-center;
}

.profile__content {
  @apply flex flex-col items-center w-[90%];
}
</style>
