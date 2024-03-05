<script setup lang="ts">
import Avatar from '@/components/avatar/avatar.vue';
import { User } from '@/types/user';
import { Icon } from '@iconify/vue';
interface IProps {
  user: User;
}
defineProps<IProps>();
</script>

<template>
  <div class="h-[180px] flex">
    <div class="flex items-center">
      <Avatar :user="user" size="100" class="ml-2" />
    </div>
    <div class="w-3/4 flex items-center justify-center">
      <div class="flex flex-col">
        <div class="flex items-center">
          <span class="text-2xl">{{ user.name }}</span>
        </div>
        <div class="flex items-center">
          <Icon icon="ant-design:idcard-outlined" />
          <span class="text-lg">: {{ user.no }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
