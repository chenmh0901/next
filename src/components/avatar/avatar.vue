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
  if (props.user.avatarUrl) {
    return `http://localhost:3000/user/${props.user.id}/avatar`;
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
  <AvatarImg v-if="plain" :src="avatarUrl" :circle="circle" />
  <IonAvatar v-else :style="sizeStyle">
    <AvatarImg :src="avatarUrl" :circle="circle" />
  </IonAvatar>
</template>

<style scoped>
ion-avatar {
  @apply shadow-xl;
}
</style>
