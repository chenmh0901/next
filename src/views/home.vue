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
        <div v-for="user in users" :key="user.id" class="home-users-container">
          <ion-card
            class="home-users-card"
            @click="
              () => {
                userDetail = user;
                showDetail = true;
              }
            "
            :disabled="showDetail"
          >
            <div class="home-card-avatar">
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
            <div class="home-card-info">
              <ion-card-title style="margin-bottom: 10px">{{
                user.name
              }}</ion-card-title>
              <ion-card-subtitle>{{ user.no }}</ion-card-subtitle>
            </div>
          </ion-card>
        </div>
      </div>
      <ion-card class="home-detail-form" v-show="showDetail">
        <detail-show
          class="detail-form"
          :close="
            () => {
              showDetail = false;
            }
          "
          :user="userDetail"
        ></detail-show>
      </ion-card>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
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
import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store';
import DetailShow from '@/components/detail/detail-show.vue';

const { getToken } = useAuthStore();

// fetch users
const users = ref<User[]>([]);
const fetchUsers = async () => {
  const token = await getToken();
  const config = {
    url: `http://localhost:3000/user/all`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + token
    }
  };
  axios(config).then((res) => {
    users.value = res.data;
  });
};
onMounted(() => {
  fetchUsers();
});

// detail form
const userDetail = ref<User>();
const showDetail = ref<boolean>(false);
</script>

<style scoped>
.home-users {
  width: 94%;
  margin: 3%;
  display: flex;
  flex-wrap: wrap;
}

.home-users-container {
  width: 50%;
  padding: 5px;
}

.home-users-card {
  height: 10vh;
  border-radius: 20px;
  display: flex;
}

.home-card-avatar {
  height: 100%;
  padding: 20px;
}

.home-card-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-detail-form {
  margin-left: 15%;
  padding: 5%;
  position: absolute;
  top: 20%;
  height: 60%;
  width: 70%;
}
.detail-form {
  height: 100%;
  width: 100%;
}
</style>
