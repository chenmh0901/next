<script lang="ts" setup>
import { IonAvatar, IonImg } from '@ionic/vue';

interface IProps {
  src?: string;
}

const props = defineProps<IProps>();

const src = props.src ?? 'https://ionicframework.com/docs/img/demos/avatar.svg';
</script>
<template>
  <IonAvatar class="w-[80px] h-[80px]">
    <IonImg alt="photo uploading" :src="src" />
  </IonAvatar>
</template>
