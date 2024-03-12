<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useAlert } from '@/composables/use-alert';
import { logout } from '@/utils/logout';

const { userChoice: show, alert } = useAlert({
  header: '提示',
  message: '确认退出登录吗？',
  btnstext: ['取消', '继续']
});
const onClick = async () => {
  await alert();
  if (show.value) {
    await logout();
  }
};
</script>

<template>
  <Icon slot="end" icon="ci:exit" class="w-[24px] h-[24px]" @click="onClick" />
</template>

<style scoped></style>
