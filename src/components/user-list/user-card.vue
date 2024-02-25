<script setup lang="ts">
import { IonCard } from '@ionic/vue';
import Avatar from '@/components/avatar/index.vue';
import { User } from '@/types/user';

enum ShowMode {
  COL = 'COL',
  ROW = 'ROW'
}

interface IProps {
  mode: ShowMode;
  user: User;
}

defineProps<IProps>();
</script>

<template>
  <div>
    <IonCard
      :class="mode === ShowMode.COL ? 'home-user-card' : 'flex flex-row'"
    >
      <div :class="mode === ShowMode.COL ? 'h-full p-5' : 'w-1/3 p-5'">
        <Avatar />
      </div>
      <div class="flex flex-col justify-center p-5">
        <ion-card-title class="mb-2">{{ user.name }}</ion-card-title>
        <ion-card-subtitle> {{ user.no }}</ion-card-subtitle>
        <ion-card-subtitle> {{ user.className }}</ion-card-subtitle>
      </div>
    </IonCard>
  </div>
</template>

<style scoped></style>
