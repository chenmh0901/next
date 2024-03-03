<script setup lang="ts">
import { IonCard } from '@ionic/vue';
import Avatar from '@/components/avatar/avatar.vue';
import { User } from '@/types/user';

enum ShowMode {
  COL = 'COL',
  ROW = 'ROW'
}

interface IProps {
  mode: ShowMode;
  user: User;
}

defineProps<IProps>();
</script>

<template>
  <IonCard
    class="user-card"
    :class="mode === ShowMode.COL ? 'flex-col items-center' : 'flex-row'"
  >
    <Avatar :user="user" :plain="mode === ShowMode.COL" />
    <div class="m-1 text-lg">
      {{ user.name }}
    </div>
  </IonCard>
</template>

<style scoped>
.user-card {
  @apply flex m-1 shadow-xl;
}
</style>
