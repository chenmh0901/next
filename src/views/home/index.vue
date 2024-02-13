<template>
  <layout-base @toggle-page="toggle">
    <user-list v-if="val == 'USER_LIST'" />
    <board v-if="val == 'BOARD'" />
    <profile v-if="val == 'PROFILE'" />
  </layout-base>
</template>

<script setup lang="ts">
import LayoutBase from '@/layouts/layout-base.vue';
import UserList from '@/components/user-list/index.vue';
import Board from '@/components/board/index.vue';
import Profile from '@/components/profile/index.vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';

const { val, toggle } = useEasyToggle(['USER_LIST', 'BOARD', 'PROFILE']);
</script>

<style scoped></style>
