<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import AvatarUpload from '@/components/avatar-upload/index.vue';
import { toast } from '@/utils/toast';
import ProfileUserCard from '@/components/profile-user-card/index.vue';
import { useModal } from '@/composables/use-modal';
import UserForm from '@/components/user-form/user-form.vue';
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
const refresh = async () => {
  const { data } = await fetchUserInfo();
  user.value = data as User;
};
//open user-form
const { open } = useModal();
const OnClick = async () => {
  console.log(user.value);
  await open(UserForm, { user: user.value });
};
onMounted(refresh);
</script>

<template>
  <div v-if="!!user" class="profile">
    <ProfileUserCard :user="user" class="profile__card mt-4" />

    <footer class="profile__card flex">
      <div class="half-block">
        <AvatarUpload
          class="w-full h-full flex"
          v-slot="props"
          @uploaded="handleUploaded"
        >
          <button class="card-btn" @click="props.upload">
            <Icon
              class="inline text-[22px]"
              icon="mdi:account-box-plus-outline"
            />上传头像
          </button>
        </AvatarUpload>
      </div>
      <div class="divider w-[20px]"></div>
      <div class="half-block">
        <button class="card-btn" @click="OnClick">
          <Icon class="inline text-[22px]" icon="mdi:account-edit-outline" />
          编辑信息
        </button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.profile {
  @apply flex flex-col items-center;
}

.profile__card {
  @apply px-6 py-4 w-full;
}

.half-block {
  @apply w-1/2 h-[80px] flex text-lg;
}

.card-btn {
  @apply w-full h-full rounded-3xl shadow-xl flex items-center justify-center gap-1;
  background-color: var(--ion-color-secondary);
}
</style>
