<script lang="ts" setup>
import { IonButton } from '@ionic/vue';
import UserForm from '@/components/profile/user-form.vue';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';
import Avatar from '@/components/avatar/index.vue';
import { useCamera } from '@/composables/use-camara';
import { UserFormMode } from '@/components/profile/type';

const mode = ref<UserFormMode>({ type: 'READ', placeholder: '未填写' });
const user = ref<User>();

const fetchUserInfo = async () => {
  const option: IHttpOptions<any> = {
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

const { photo, takePhoto } = useCamera();
const refresh = async () => {
  const { data } = await fetchUserInfo();
  user.value = data as User;
};
onMounted(() => refresh());
</script>

<template>
  <div class="profile">
    <div class="profile__content">
      <div class="profile__avatar">
        <Avatar :src="photo.webviewPath" />
        <IonButton v-if="mode?.type == 'EDIT'" size="small" @click="takePhoto"
          >上传照片
        </IonButton>
      </div>
      <UserForm
        v-if="!!user"
        :user="user"
        :mode="mode"
        @update="
          (v) => {
            mode.type = 'READ';
            if (v) {
              patchUserInfo(v);
            }
          }
        "
      />
      <IonButton
        v-if="mode?.type == 'READ'"
        class="profile__btn"
        @click="mode.type = 'EDIT'"
        >编辑
      </IonButton>
      <IonButton
        v-if="mode?.type == 'EDIT'"
        class="profile__btn"
        @click="mode.type = 'READ'"
        >退出
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

.profile__btn {
  @apply w-full;
}
</style>
