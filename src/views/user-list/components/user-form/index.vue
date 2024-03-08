<script setup lang="ts">
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import { User } from '@/types/user';
import { PROFILE_FIELDS_ADMIN } from '@components/user-form/type';
import UserForm from '@components/user-form/user-form.vue';

interface IProps {
  user: User;
  isAdmin: boolean;
}
defineProps<IProps>();
</script>

<template>
  <div class="user-form-content">
    <template v-if="!isAdmin">
      <UserForm
        :user="user"
        :is-admin="!isAdmin"
        :is-privacy="false"
        :profile-fields="PROFILE_FIELDS_ADMIN"
      />
    </template>
    <IonAccordionGroup v-else class="w-[350px]">
      <IonAccordion>
        <IonItem slot="header" color="light">
          <IonLabel>普通信息</IonLabel>
        </IonItem>
        <UserForm
          slot="content"
          :user="user"
          :is-admin="isAdmin"
          :is-privacy="false"
          :profile-fields="PROFILE_FIELDS_ADMIN"
        />
      </IonAccordion>
      <IonAccordion>
        <IonItem slot="header" color="light">
          <IonLabel>隐私信息</IonLabel>
        </IonItem>
        <UserForm
          slot="content"
          :user="user"
          :is-admin="isAdmin"
          :is-privacy="true"
          :profile-fields="PROFILE_FIELDS_ADMIN"
        />
      </IonAccordion>
    </IonAccordionGroup>
  </div>
</template>

<style scoped></style>
