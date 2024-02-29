<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';
import { computed } from 'vue';
import { UserFormMode } from '@/components/user-form/type';
import { useCamera } from '@/composables/use-camara';

interface IProps {
  src?: string;
  size?: number | string;
  mode?: UserFormMode;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update', val: string): void;
}>();
// avatar size style
const sizeStyle = computed(() => {
  return {
    width: `${props.size ?? 80}px`,
    height: `${props.size ?? 80}px`
  };
});

//upload photo
const { photo, takePhoto } = useCamera();
const onClick = async () => {
  if (props.mode == UserFormMode.EDIT) {
    await takePhoto();
    emit('update', photo.value.webviewPath);
  }
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
