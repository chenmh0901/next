<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useAuthStore } from '@/stores/auth';
import { pageTo } from '@/router/director';
import { useAlert } from '@/composables/use-alert';

const { removeToken } = useAuthStore();
const { userChoice, alert } = useAlert('提示', '确认退出登录吗？');
const onClick = async () => {
  await alert();
  if (userChoice.value) {
    await removeToken();
    pageTo('signin');
  }
};
</script>

<template>
  <Icon slot="end" icon="ci:exit" class="w-[24px] h-[24px]" @click="onClick" />
</template>

<style scoped></style>
