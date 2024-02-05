<script lang="ts" setup>
import { IonCard, IonIcon, IonButton } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import DialogUserDetail from '@/components/user-list/components/dialog-user-detail.vue';
import { computed, Ref, ref } from 'vue';
import { useToggle } from '@/composables/use-toggle';

const users = computed(() => {
  const user = [];
  for (let i = 0; i < 3; i++) {
    user.push({
      id: i + 1,
      no: '1210204146',
      name: '陈明浩',
      admin: true,
      email: 'string',
      wechat: 'string',
      QQ: 'string',
      phone: 'string',
      class: '数媒212',
      room: 'string',
      birthPlace: 'string',
      resume: 'string'
    });
  }
  return user;
});
const show = ref(false);
const userDetail = ref();

//  show mode
const showModeToggle = useToggle<boolean>(ref(true));
</script>

<template>
  <div class="home-users flex flex-wrap">
    <div
      v-for="user in users"
      :id="user.id"
      :key="user.id"
      :class="showModeToggle.val.value ? 'w-1/2 p-1' : 'w-full p-1'"
    >
      <ion-card
        :class="showModeToggle.val.value ? 'home-user-card' : 'flex flex-row'"
        @click="
          () => {
            userDetail = user;
            show = true;
          }
        "
      >
        <div :class="showModeToggle.val.value ? 'h-full p-5' : 'w-1/3 p-5'">
          <img
            alt="Grapefruit slice atop a pile of other slices"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            style="
              border-radius: 20px;
              width: 100%;
              height: 100%;
              box-shadow:
                rgba(0, 0, 0, 0.2) 0 4px 1px -2px,
                rgba(0, 0, 0, 0.14) 0 3px 2px 0,
                rgba(0, 0, 0, 0.12) 0 2px 5px 0;
            "
          />
        </div>
        <div class="flex flex-col justify-center p-5">
          <ion-card-title class="mb-2">{{ user.name }}</ion-card-title>
          <ion-card-subtitle> {{ user.no }}</ion-card-subtitle>
          <ion-card-subtitle> {{ user.class }}</ion-card-subtitle>
        </div>
      </ion-card>
    </div>
  </div>
  <dialog-user-detail
    :close="() => (show = false)"
    :show="show"
    :user="userDetail"
  ></dialog-user-detail>
  <ion-button class="fixed top-10 right-0" size="small"
              @click="showModeToggle.toggle()">
    <ion-icon :icon="copyOutline"></ion-icon>
  </ion-button>
</template>

<style scoped></style>
