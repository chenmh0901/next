<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';
import { computed } from 'vue';
import { UserFormMode } from '@/components/profile/type';

interface IProps {
  src?: string;
  size?: number | string;
  mode?: UserFormMode;
}

const props = defineProps<IProps>();

const sizeStyle = computed(() => {
  return {
    width: `${props.size ?? 80}px`,
    height: `${props.size ?? 80}px`
  };
});
const onClick = () => {
  console.log(1);
};
</script>
<template>
  <IonAvatar :style="sizeStyle" @click="onClick">
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
