<script setup lang="ts">
import UserForm from '@components/user-form/user-form.vue';
import { User } from '@/types/user';
import Avatar from '@/components/avatar/avatar.vue';
interface IProps {
  user: User;
  wrapperType: string;
}
defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col items-center pt-5 h-full">
    <Avatar :user="user" size="100" />
    <UserForm :user="user" :wrapper-type="wrapperType" class="my-2" />
  </div>
</template>

<style scoped></style>
