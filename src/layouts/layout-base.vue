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
import {
  home,
  newspaper,
  person,
  homeOutline,
  newspaperOutline,
  personOutline
} from 'ionicons/icons';
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
        <IonTitle>ZustCloud Next</IonTitle>
        <ThemeToggle class="mr-3" />
        <LogoutBtn v-if="page == 'PROFILE'" class="mr-3" />
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true" class="layout-base-content">
      <slot />
    </IonContent>

    <!-- FOOTER -->
    <div :style="footerHeightStyle"></div>
    <footer :style="footerHeightStyle" class="nav-tool-bar">
      <button @click="emit('toggle-page', 'USER_LIST')">
        <IonIcon :icon="page == 'USER_LIST' ? home : homeOutline"></IonIcon>
        <div>主页</div>
      </button>
      <button @click="emit('toggle-page', 'BOARD')">
        <IonIcon
          :icon="page == 'BOARD' ? newspaper : newspaperOutline"
        ></IonIcon>
        <div>通知</div>
      </button>
      <button @click="emit('toggle-page', 'PROFILE')">
        <IonIcon :icon="page == 'PROFILE' ? person : personOutline"></IonIcon>
        <div>我</div>
      </button>
    </footer>
  </IonPage>
</template>

<style scoped>
.nav-tool-bar {
  @apply absolute bottom-0 w-full flex backdrop-blur-[2px];
  background: var(--ion-card-background);
  color: var(--ion-color-dark);
}

.nav-tool-bar button {
  @apply w-1/3;
}
</style>
