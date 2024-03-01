<script lang="ts" setup>
import { IonIcon, IonButton } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import DialogUserDetail from '@/components/user-list/dialog-user-detail.vue';
import { watch, onBeforeMount, ref, StyleValue } from 'vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import UserCard from '@/components/user-list/user-card.vue';
import { useUserStore } from '@/stores/user';

const show = ref(false);
const userDetail = ref();

enum ShowMode {
  COL = 'COL',
  ROW = 'ROW'
}

// view toggle
const { val, toggle } = useEasyToggle([ShowMode.COL, ShowMode.ROW]);
const topPosStyle = ref<StyleValue>();
watch(
  val,
  (val) => {
    topPosStyle.value =
      val == ShowMode.COL
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

const users = ref<User[]>([]);
const userStore = useUserStore();
const isAdmin = ref<boolean>(false);
const fetchUsers = async () => {
  try {
    const options: IHttpOptions<any> = {
      path: 'user/',
      method: 'get'
    };
    const { data } = await useHttp<User[]>(options);
    users.value = data;
  } catch (e) {
    console.error(e);
  }
};

const open = (user: User) => {
  userDetail.value = user;
  show.value = true;
};
onBeforeMount(async () => {
  await fetchUsers();
  isAdmin.value = await userStore.isAdmin();
});
</script>

<template>
  <ul v-if="users?.length && users.length > 0" class="user-list flex flex-wrap">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :mode="val"
      :user="user"
      :class="val === ShowMode.COL ? 'w-1/3' : 'w-full'"
      @click="open"
    />
    <IonButton
      :style="topPosStyle"
      class="user-list__drag-box"
      size="small"
      @click="toggle"
    >
      <IonIcon :icon="copyOutline" />
    </IonButton>

    <DialogUserDetail
      :close="() => (show = false)"
      :show="show"
      :user="userDetail"
      :is-admin="isAdmin"
    />
  </ul>
</template>

<style scoped>
.user-list__drag-box {
  @apply fixed w-[40px] h-[30px];
  transition: all 0.4s ease;
}
</style>
