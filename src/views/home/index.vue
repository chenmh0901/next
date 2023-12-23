<template>
  <ion-page>
    <ion-header :translucent="true" style="box-shadow: none">
      <ion-toolbar>
        <ion-title>芸社</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="home-users">
        <div
          v-for="user in users"
          :key="user.id"
          class="w-1/2 p-1"
          :id="user.id.toString()"
        >
          <ion-card
            class="home-users-card"
            @click="
              () => {
                userDetail = user;
              }
            "
          >
            <div class="h-full p-5">
              <img
                style="
                  border-radius: 20px;
                  width: 100%;
                  height: 100%;
                  box-shadow:
                    rgba(0, 0, 0, 0.2) 0 4px 1px -2px,
                    rgba(0, 0, 0, 0.14) 0 3px 2px 0,
                    rgba(0, 0, 0, 0.12) 0 2px 5px 0;
                "
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                alt="Grapefruit slice atop a pile of other slices"
              />
            </div>
            <div class="flex flex-col justify-center p-5">
              <ion-card-title class="mb-2">{{ user.name }}</ion-card-title>
              <ion-card-subtitle>
                {{ user.no }}
              </ion-card-subtitle>
            </div>
          </ion-card>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-title>是管理员吗？ {{ isAdminUser }}</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>

  <ion-modal id="example-modal" :trigger="userDetail?.id">
    <dialog-user-detail :user="userDetail"></dialog-user-detail>
  </ion-modal>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal
} from '@ionic/vue';
import { addCircleOutline } from 'ionicons/icons';
import 'swiper/css';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { useUserStore } from '@/stores/user.store';
import { useHttp } from '@/utils/http';
import DialogUserDetail from '@/views/home/components/dialog-user-detail.vue';
import DetailShow from '@/components/detail/detail-show.vue';

const userStore = useUserStore();

// fetch users
const users = ref<User[]>([]);
const fetchUsers = async () => {
  const res = await useHttp<User[]>({
    method: 'get',
    path: 'user/all'
  });
  users.value = res.data;
};
onMounted(() => {
  fetchUsers();
});

// detail form
const userDetail = ref<User>();

// user self info
const isAdminUser = ref<boolean>();
onMounted(async () => {
  isAdminUser.value = await userStore.getIsAdmin();
});
</script>

<style scoped>
.home-users {
  @apply flex flex-wrap;
  width: 94%;
  margin: 3%;
}

.home-users-card {
  @apply flex;
  height: 10vh;
  border-radius: 20px;
}

ion-modal#example-modal {
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}
</style>
