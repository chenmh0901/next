<template>
  <LayoutBase @toggle-page="toggle">
    <UserList v-if="val == 'USER_LIST'" />
    <Board v-if="val == 'BOARD'" />
    <Profile v-if="val == 'PROFILE'" />
  </LayoutBase>
</template>

<script setup lang="ts">
import LayoutBase from '@/layouts/layout-base.vue';
import UserList from './views/user-list/index.vue';
import Board from './views/board/index.vue';
import Profile from './views/profile/index.vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';

const { val, toggle } = useEasyToggle(['USER_LIST', 'BOARD', 'PROFILE']);
</script>

<style scoped></style>
