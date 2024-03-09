<script setup lang="ts">
import UserForm from '@components/user-form/user-form.vue';
import { User } from '@/types/user';
import Avatar from '@components/avatar/avatar.vue';
import { PROFILE_FIELDS } from '@components/user-form/type';
interface IProps {
  user: User;
  isAdmin: boolean;
  isPrivacy: boolean;
}
defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col items-center pt-0.5 h-full">
    <Avatar :user="user" size="100" />
    <UserForm
      class="my-2"
      :user="user"
      :is-admin="false"
      :is-privacy="false"
      :profile-fields="PROFILE_FIELDS"
    />
  </div>
</template>

<style scoped></style>
