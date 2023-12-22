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
        <div v-for="user in users" :key="user.id" class="w-1/2 p-1">
          <ion-card
            class="home-users-card"
            @click="
              () => {
                userDetail = user;
                show = true;
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

  <el-popover v-model="show" class="home-detail-form" v-if="userDetail">
    <detail-show
      class="w-full h-full"
      :close="
        () => {
          userDetail = undefined;
          show = false;
        }
      "
      :user="userDetail"
    ></detail-show>
  </el-popover>
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
  IonToolbar
} from '@ionic/vue';
import { addCircleOutline } from 'ionicons/icons';
import 'swiper/css';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import DetailShow from '@/components/detail/detail-show.vue';
import { useUserStore } from '@/stores/user.store';
import { useHttp } from '@/utils/http';

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
const show = ref(false);
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

.home-detail-form {
  margin-left: 15%;
  padding: 5%;
  position: absolute;
  top: 20%;
  height: 60%;
  width: 70%;
}
</style>
