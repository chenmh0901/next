<script lang="ts" setup>
import { IonAvatar } from '@ionic/vue';
import { useCamera } from '@/composables/use-camara';

const { open } = useCamera();
</script>
<template>
  <IonAvatar class="w-[80px] h-[80px]" @click="open">
    <img
      alt="Silhouette of a person's head"
      src="https://ionicframework.com/docs/img/demos/avatar.svg"
    />
  </IonAvatar>
</template>
