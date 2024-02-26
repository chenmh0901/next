<script lang="ts" setup>
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/vue';
import { homeOutline, newspaperOutline, personOutline } from 'ionicons/icons';
import ThemeToggle from '@/components/theme-toggle/index.vue';
import Setting from '@/components/setting/index.vue';

interface IProps {
  page: PAGE;
}

defineProps<IProps>();
const emit = defineEmits<{
  (e: 'toggle-page', val: PAGE): void;
}>();

type PAGE = 'USER_LIST' | 'BOARD' | 'PROFILE';
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>搜索框</IonTitle>
        <Setting v-if="page == 'PROFILE'" class="mr-3" />
        <ThemeToggle v-else class="mr-3" />
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true" class="layout-base-content">
      <slot></slot>
    </IonContent>
    <div class="h-20"></div>
    <IonFooter class="h-20 absolute bottom-0">
      <IonToolbar>
        <IonTabBar class="h-20">
          <IonTabButton @click="emit('toggle-page', 'USER_LIST')">
            <IonIcon :icon="homeOutline"></IonIcon>
            <IonLabel>主页</IonLabel>
          </IonTabButton>
          <IonTabButton @click="emit('toggle-page', 'BOARD')">
            <IonIcon :icon="newspaperOutline"></IonIcon>
            <IonLabel>通知</IonLabel>
          </IonTabButton>
          <IonTabButton @click="emit('toggle-page', 'PROFILE')">
            <IonIcon :icon="personOutline"></IonIcon>
            <IonLabel>我</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonToolbar>
    </IonFooter>
  </IonPage>
</template>

<style scoped></style>
