<script setup lang="ts">
import { IonAvatar } from '@ionic/vue';
import { computed } from 'vue';
import AvatarImg from './avatar-img.vue';
import { User } from '@/types/user';
interface IProps {
  user: User;
  size?: number | string;
  plain?: boolean;
  circle?: boolean;
}
const props = defineProps<IProps>();
const avatarUrl = computed(() => {
  if (props.user.avatar) {
    return `http://119.12.173.244:8080/user/${props.user.id}/avatar`;
  }
  return '';
});
// avatar style
const sizeStyle = computed(() => {
  return {
    width: `${props.size ?? 70}px`,
    height: `${props.size ?? 70}px`
  };
});
</script>

<template>
  <AvatarImg v-if="plain" :src="avatarUrl" circle />
  <IonAvatar v-else :style="sizeStyle">
    <AvatarImg :src="avatarUrl" />
  </IonAvatar>
</template>

<style scoped>
ion-avatar {
  @apply shadow-2xl;
  box-shadow: 0 1px 5px 0 var(--ion-color-primary);
}
</style>
