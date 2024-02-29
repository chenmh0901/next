<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';
import { computed } from 'vue';

interface IProps {
  src?: string;
  size?: number | string;
}

const props = defineProps<IProps>();

const sizeStyle = computed(() => {
  return {
    width: `${props.size ?? 80}px`,
    height: `${props.size ?? 80}px`
  };
});
</script>
<template>
  <IonAvatar :style="sizeStyle">
    <IonImg
      alt="photo uploading"
      :src="src || 'https://ionicframework.com/docs/img/demos/avatar.svg'"
    />
  </IonAvatar>
</template>

<style scoped>
ion-avatar {
  @apply shadow-2xl;
  --border-radius: 8px;
}
</style>
