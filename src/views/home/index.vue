<template>
  <layout-base @toggle-page="(val) => togglePage(val)">
    <user-list v-if="page == 'USER_LIST'" />
    <board v-if="page == 'BOARD'" />
    <profile v-if="page == 'PROFILE'" />
  </layout-base>
</template>

<script setup lang="ts">
import LayoutBase from '@/layouts/layout-base.vue';
import UserList from '@/components/user-list/index.vue';
import Board from '@/components/board/index.vue';
import Profile from '@/components/profile/index.vue';
import { ref } from 'vue';

type PAGE = 'USER_LIST' | 'BOARD' | 'PROFILE';
const page = ref<PAGE>('USER_LIST');
const togglePage = (p: PAGE) => {
  page.value = p;
};
</script>

<style scoped></style>
