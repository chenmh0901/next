<script setup lang="ts">
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import { User } from '@/types/user';
import UserForm from '@components/user-form/user-form.vue';

interface IProps {
  user: User;
  isAdmin: boolean;
  wrapperType?: string;
}
defineProps<IProps>();
</script>

<template>
  <div class="user-form-content">
    <UserForm :user="user" :is-admin="!isAdmin" />
    <IonAccordionGroup v-if="!isAdmin">
      <IonAccordion>
        <IonItem slot="header" color="light">
          <IonLabel>隐私信息</IonLabel>
        </IonItem>
        <UserForm
          slot="content"
          :user="user"
          :wrapper-type="wrapperType"
          :is-admin="isAdmin"
        />
      </IonAccordion>
    </IonAccordionGroup>
  </div>
</template>

<style scoped>
.user-form-content {
  @apply h-[100vh] flex flex-col;
}
</style>
