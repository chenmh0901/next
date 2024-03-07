<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import { toast } from '@/utils/toast';
import { useModal } from '@/composables/use-modal';
import AvatarUpload from '@/components/avatar-upload/index.vue';
import ProfileUserCard from '@/views/profile/components/user-card/index.vue';
import ProfileUserForm from '@/views/profile/components/user-form/index.vue';
import AdminMsg from '@/views/profile/components/admin-msg/index.vue';
// about avatar
const handleUploaded = async () => {
  await toast('上传成功');
  await refresh();
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

// open user-form
const { open } = useModal();
const openSelfForm = async () => {
  await open({
    component: ProfileUserForm,
    property: { user: user.value, wrapperType: 'modal' }
  });
};

// open admin-resume
const openAdminResume = async () => {
  await open({ component: AdminMsg, property: { user: user.value } });
};

// mounted
const cardKey = ref(0);
const refresh = async () => {
  cardKey.value++;
  const { data } = await fetchUserInfo();
  user.value = data as User;
};
onMounted(refresh);
</script>

<template>
  <div v-if="user" class="profile">
    <ProfileUserCard :key="cardKey" :user="user" class="profile__card mt-4" />
    <div class="profile__card flex">
      <div class="half-block">
        <AvatarUpload
          v-slot="props"
          class="w-full h-full flex"
          @uploaded="handleUploaded"
        >
          <button class="card-btn" @click="props.upload">
            <Icon
              class="inline text-[22px]"
              icon="mdi:account-box-plus-outline"
            />
            上传头像
          </button>
        </AvatarUpload>
      </div>
      <div class="divider w-[20px]"></div>
      <div class="half-block">
        <button class="card-btn" @click="openSelfForm">
          <Icon class="inline text-[22px]" icon="mdi:account-edit-outline" />
          编辑信息
        </button>
      </div>
    </div>
    <div class="profile__card flex">
      <button class="card-btn !h-[80px] msg-btn" @click="openAdminResume">
        <Icon
          class="inline text-[22px]"
          icon="mdi:message-processing-outline"
        />
        查看留言
      </button>
    </div>
  </div>
  <div v-else class="loading-mask">
    <Icon class="text-[60px] mb-4" icon="line-md:loading-twotone-loop" />
    <div class="text-[20px]">正在加载...</div>
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

.msg-btn {
  background-color: var(--ion-color-secondary-contrast);
}

.loading-mask {
  @apply absolute flex flex-col justify-center w-full h-full top-0 bottom-0 items-center;
  background-color: rgba(121, 121, 121, 0.2);
}
</style>
