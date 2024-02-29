<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';
import { computed } from 'vue';
import { UserFormMode } from '@/components/user-form/type';
import { useCamera } from '@/composables/use-camara';
import { Icon } from '@iconify/vue';

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

//handleClick
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
    <IonImg v-if="src" :src="src" />
    <Icon v-if="mode == UserFormMode.EDIT" icon="mingcute:add-fill" />
  </IonAvatar>
</template>

<style scoped>
ion-avatar {
  @apply shadow-2xl flex items-center justify-center;
  --border-radius: 8px;
  box-shadow: 0 1px 5px 0 var(--ion-color-primary);
}
</style>
