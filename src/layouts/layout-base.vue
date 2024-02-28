<script lang="ts" setup>
import {
  IonContent,
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
import LogoutBtn from '@/components/logout-btn/index.vue';

interface IProps {
  page: PAGE;
}

defineProps<IProps>();
const emit = defineEmits<{
  (e: 'toggle-page', val: PAGE): void;
}>();

type PAGE = 'USER_LIST' | 'BOARD' | 'PROFILE';

const footerHeightStyle = {
  height: '60px'
};
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>搜索框</IonTitle>
        <LogoutBtn v-if="page == 'PROFILE'" class="mr-3" />

        <ThemeToggle v-if="page != 'PROFILE'" class="mr-3" />
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true" class="layout-base-content">
      <slot></slot>
    </IonContent>

    <!-- FOOTER -->
    <div :style="footerHeightStyle"></div>
    <IonToolbar
      :style="footerHeightStyle"
      class="nav-tool-bar absolute bottom-0"
    >
      <IonTabBar :style="footerHeightStyle">
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
  </IonPage>
</template>

<style scoped>
.nav-tool-bar {
  box-shadow: 0 8px 12px 1px var(--ion-color-primary);
}
</style>
