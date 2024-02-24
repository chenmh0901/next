<script lang="ts" setup>
import { IonCard, IonIcon, IonButton } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import DialogUserDetail from '@/components/user-list/components/dialog-user-detail.vue';
import Avatar from '@/components/avatar/index.vue';
import { onBeforeMount, ref } from 'vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';

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
  <div class="home-users flex flex-wrap">
    <div
      v-for="user in users"
      :key="user.id"
      :class="val === 'COL' ? 'w-1/2 p-1' : 'w-full p-1'"
    >
      <IonCard
        :class="val === ShowMode.COL ? 'home-user-card' : 'flex flex-row'"
        @click="
          () => {
            userDetail = user;
            show = true;
          }
        "
      >
        <div :class="val === ShowMode.COL ? 'h-full p-5' : 'w-1/3 p-5'">
          <Avatar />
        </div>
        <div class="flex flex-col justify-center p-5">
          <ion-card-title class="mb-2">{{ user.name }}</ion-card-title>
          <ion-card-subtitle> {{ user.no }}</ion-card-subtitle>
          <ion-card-subtitle> {{ user.className }}</ion-card-subtitle>
        </div>
      </IonCard>
    </div>
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
