<script lang="ts" setup>
import { User } from '@/types/user';
import { IonPopover } from '@ionic/vue';
import UserForm from '@/components/user-form/user-form.vue';
import { UserFormMode } from '@/components/user-form/type';

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
    <UserForm
      :user="props.user"
      :is-admin="isAdmin"
      :mode="UserFormMode.READ"
    />
  </IonPopover>
</template>

<style scoped></style>
