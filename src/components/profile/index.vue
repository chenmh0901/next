<script lang="ts" setup>
import UserForm from '@/components/profile/components/user-form.vue';
import { ref } from 'vue';
import { User } from '@/types/user';

enum UserFormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

const mode = ref<UserFormMode>('VIEW');
const user = ref<User>({
  name: '张',
  age: 18
});
</script>

<template>
  <div class="profile">
    <div class="profile__header">个人信息</div>
    <div class="profile__content">
      <UserForm :user="user" :mode="mode" />
      <ion-button color="danger" @click="mode = 'VIEW'"
        >[DEBUG] 查看
      </ion-button>
      <ion-button color="danger" @click="mode = 'EDIT'"
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
