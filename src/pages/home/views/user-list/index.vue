<script lang="ts" setup>
import { IonIcon, IonButton } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import DialogUserDetail from '@/components/user-list/dialog-user-detail.vue';
import { onBeforeMount, ref } from 'vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import UserCard from '@/components/user-list/user-card.vue';

const show = ref(false);
const userDetail = ref();

enum ShowMode {
  COL = 'COL',
  ROW = 'ROW'
}

//  show mode
const { val, toggle } = useEasyToggle([ShowMode.COL, ShowMode.ROW]);

const users = ref<User[]>([]);
const fetchUsers = async () => {
  const options: IHttpOptions<any> = {
    path: 'user/',
    method: 'get'
  };
  const res = await useHttp(options);
  res.data.map((item: User) => {
    users.value.push(item);
  });
};

onBeforeMount(() => {
  fetchUsers();
});
</script>

<template>
  <div v-if="users?.length" class="home-users flex flex-wrap">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :mode="val"
      :user="user"
      :class="val === ShowMode.COL ? 'w-1/2 -mb-2' : 'w-full -mb-2'"
      @click="
        () => {
          userDetail = user;
          show = true;
        }
      "
    />
    <IonButton class="fixed top-15 right-0" size="small" @click="toggle()">
      <IonIcon :icon="copyOutline"></IonIcon>
    </IonButton>
    <DialogUserDetail
      :close="() => (show = false)"
      :show="show"
      :user="userDetail"
    ></DialogUserDetail>
  </div>
</template>

<style scoped></style>
