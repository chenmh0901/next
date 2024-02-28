<script lang="ts" setup>
import DetailShow from '@/components/user-list/user-detail.vue';
import { User } from '@/types/user';
import { IonPopover } from '@ionic/vue';

interface IProps {
  user: User;
  isAdmin: boolean;
  show: boolean;
  close: () => void;
}

const props = defineProps<IProps>();
</script>

<template>
  <IonPopover :is-open="props.show" @didDismiss="close">
    <div>
      <DetailShow :user="props.user" :is-admin="isAdmin"></DetailShow>
    </div>
  </IonPopover>
</template>

<style scoped></style>
