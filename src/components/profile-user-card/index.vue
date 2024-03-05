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
  <div class="card-wrapper">
    <div class="card-body">
      <Avatar :user="user" size="100" circle />
      <figure>
        <p class="card-title">{{ user.name }}</p>
        <p class="card-description">
          <Icon icon="ant-design:idcard-outlined" />
          <span> {{ user.no }}</span>
        </p>
      </figure>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  @apply flex;
}

.card-body {
  @apply rounded-[20px] w-full h-[140px] shadow-lg flex justify-evenly items-center;
  background-color: var(--ion-color-light-shade);
}

.card-title {
  @apply text-2xl font-bold mb-2;
}

.card-description {
  @apply flex items-center gap-1;
}
</style>
