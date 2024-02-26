<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useAuthStore } from '@/stores/auth';
import { pageTo } from '@/router/director';

const { removeToken } = useAuthStore();
const onClick = async () => {
  await removeToken();
  pageTo('signin');
};
</script>

<template>
  <Icon slot="end" icon="ci:exit" class="w-[24px] h-[24px]" @click="onClick" />
</template>

<style scoped></style>
