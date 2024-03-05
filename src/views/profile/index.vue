<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
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
    <div class="profile__content">
      <ProfileUserCard :user="user" class="profile__card" />
      <footer class="flex justify-around w-full mt-2">
        <AvatarUpload v-slot="props" @uploaded="handleUploaded">
          <IonButton @click="props.upload">上传头像</IonButton>
        </AvatarUpload>
        <div>
          <IonButton @click="OnClick">编辑信息</IonButton>
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
.profile__card {
  @apply w-full border rounded-md mt-1;
  box-shadow: 0 1px 5px 1px var(--ion-color-primary);
}
</style>
