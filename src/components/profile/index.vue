<script lang="ts" setup>
import UserForm from '@/components/profile/components/user-form.vue';
import { ref } from 'vue';
import { User } from '@/types/user';

enum UserFormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

const mode = ref<UserFormMode>(UserFormMode.VIEW);
const user = ref<User>();
</script>

<template>
  <div class="profile">
    <div class="profile__header">个人信息</div>
    <div class="profile__content">
      <UserForm v-if="user" :user="user" :mode="mode" />
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
