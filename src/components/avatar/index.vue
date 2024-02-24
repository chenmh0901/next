<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';

interface IProps {
  src?: string;
}

defineProps<IProps>();
</script>
<template>
  <IonAvatar class="w-[80px] h-[80px]">
    <IonImg alt="photo uploading" :src="src" />
  </IonAvatar>
</template>
