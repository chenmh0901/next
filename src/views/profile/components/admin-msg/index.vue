<script setup lang="ts">
import { IonButton, IonText, modalController } from '@ionic/vue';
import { Icon } from '@iconify/vue';
import { User } from '@/types/user';
interface IProps {
  user: User;
}
defineProps<IProps>();
const onClick = () => {
  modalController.dismiss();
};
</script>

<template>
  <div class="flex flex-col items-center p-2">
    <p class="text-2xl">
      <Icon class="inline mr-0.5" icon="mdi:message-text-outline" />管理员留言
    </p>
    <div class="w-full flex h-[100px] my-2">
      <IonText class="border w-full">{{ user.adminResume }}}</IonText>
    </div>
    <IonButton color="medium" class="mt-auto flex" size="small" @click="onClick"
      >确认</IonButton
    >
  </div>
</template>

<style scoped></style>
