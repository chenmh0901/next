<script lang="ts" setup>
import { IonIcon, IonButton } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import { watch, onBeforeMount, ref, StyleValue } from 'vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import { useUserStore } from '@/stores/user';
import { useModal } from '@/composables/use-modal';
import UserCard from '@/views/user-list/components/user-card/index.vue';
import UserForm from './components/user-form/index.vue';
import LoadingMask from '@/components/loading-mask/index.vue';
enum ShowMode {
  COL = 'COL',
  ROW = 'ROW'
}

// view toggle
const { val, toggle } = useEasyToggle([ShowMode.ROW, ShowMode.COL]);
const topPosStyle = ref<StyleValue>();
watch(
  val,
  (val) => {
    topPosStyle.value =
      val == ShowMode.ROW
        ? {
            top: '50px',
            right: '20px'
          }
        : {
            top: '80px',
            right: '-5px'
          };
  },
  {
    immediate: true
  }
);
// users
const users = ref<User[]>([]);
const fetchUsers = async () => {
  try {
    const options: IHttpOptions<any> = {
      path: 'user/all',
      method: 'get'
    };
    const { data } = await useHttp<User[]>(options);
    users.value = data;
  } catch (e) {
    console.error(e);
  }
};
// open user-form
const { open } = useModal();
const onClick = (user: User) => {
  open({
    component: UserForm,
    property: {
      user,
      isAdmin: isAdmin.value
    },
    cssClass: 'dialog-modal'
  });
};
// isAdmin
const userStore = useUserStore();
const isAdmin = ref<boolean>();
// loading
const loading = ref();
onBeforeMount(async () => {
  loading.value = true;
  await fetchUsers();
  isAdmin.value = await userStore.isAdmin();
  loading.value = false;
});
</script>

<template>
  <ul v-if="!loading" class="flex flex-wrap py-2">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :mode="val"
      :user="user"
      :class="val === ShowMode.ROW ? 'w-1/3 p-1.5' : 'w-full py-1.5 px-5'"
      @click="onClick(user)"
    />
    <IonButton
      :style="topPosStyle"
      class="user-list__drag-box"
      size="small"
      @click="toggle"
    >
      <IonIcon :icon="copyOutline" />
    </IonButton>
  </ul>
  <LoadingMask v-else />
</template>

<style scoped>
.user-list__drag-box {
  @apply fixed w-[40px] h-[30px];
  transition: all 0.4s ease;
}
</style>
