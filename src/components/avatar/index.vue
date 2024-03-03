<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';

interface IProps {
  src?: string;
  size?: number | string;
  plain?: boolean;
}

const props = defineProps<IProps>();

// avatar style
const sizeStyle = computed(() => {
  return {
    width: `${props.size ?? 80}px`,
    height: `${props.size ?? 80}px`
  };
});

// const { url, takePhoto } = useCamera();
// const onClick = async () => {
//   if (props.editable) {
//     await takePhoto();
//     if (url.value) {
//       emit('update', url.value);
//     }
//   }
// };

const loaded = ref(false);
</script>
<template>
  <template v-if="plain">
    <img :src="src" alt="" @load="loaded = true" />
    <img
      v-if="!loaded"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
      alt=""
    />
  </template>
  <IonAvatar v-else :style="sizeStyle">
    <Icon v-if="!src" icon="mingcute:add-fill" />
    <IonImg v-else :src="src" />
  </IonAvatar>
</template>

<style scoped>
ion-avatar {
  @apply shadow-2xl flex items-center justify-center;
  --border-radius: 8px;
  box-shadow: 0 1px 5px 0 var(--ion-color-primary);
}
</style>
