<script setup lang="ts">
import { IonCard } from '@ionic/vue';
import { ref } from 'vue';

const users = ref();
</script>

<template>
  <div class="home-users">
    <div
      v-for="user in users"
      :key="user.id"
      class="w-1/2 p-1"
      :id="user.id.toString()"
    >
      <ion-card class="home-users-card">
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
          <ion-card-subtitle> {{ user }}</ion-card-subtitle>
        </div>
      </ion-card>
    </div>
  </div>
</template>

<style scoped></style>
