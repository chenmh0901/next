<template>
  <ion-app>
    <ion-router-outlet/>
    <danger-devtools></danger-devtools>
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import DangerDevtools from "@/components/danger-devtools.vue";
</script>
