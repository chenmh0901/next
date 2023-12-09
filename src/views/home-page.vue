<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>你好啊~</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">你好啊~</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label class="ion-text-wrap">
          <ion-button
            style="margin: 10px auto; display: block; width: 40%; height: 5vh"
            expand="block"
            href="auth"
          >
            点击前往注册页面
          </ion-button>
        </ion-label>
      </ion-item>

      <!--      <ion-list>-->
      <!--        <MessageListItem v-for="message in messages" :key="message.id" :message="message"/>-->
      <!--      </ion-list>-->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { getMessages, Message } from "@/data/messages";
import { ref } from "vue";

const title = ref();
const messages = ref<Message[]>(getMessages());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};
</script>