<script setup lang="ts">
import { IonCard, IonButton } from '@ionic/vue';
import Avatar from '@/components/avatar/index.vue';
import { User } from '@/types/user';
import { exportToCsv } from '@/utils/export';

enum ShowMode {
  COL = 'COL',
  ROW = 'ROW'
}

interface IProps {
  mode: ShowMode;
  user: User;
}

const props = defineProps<IProps>();

const onclick = () => {
  console.log('导出数据');
  exportToCsv('user.csv', [props.user]);
};
</script>

<template>
  <div>
    <IonCard
      :class="
        mode === ShowMode.COL ? 'flex flex-col items-center' : 'flex flex-row'
      "
    >
      <div :class="mode === ShowMode.COL ? 'h-full mt-2' : 'w-1/3 p-5'">
        <Avatar />
      </div>
      <div class="flex flex-col justify-center p-5">
        <ion-card-title class="mb-2">{{ user.name }}</ion-card-title>
        <ion-card-subtitle> {{ user.no }}</ion-card-subtitle>
        <ion-card-subtitle> {{ user.className }}</ion-card-subtitle>
      </div>
      <IonButton size="small" @click.stop="onclick">导出数据</IonButton>
    </IonCard>
  </div>
</template>

<style scoped></style>
