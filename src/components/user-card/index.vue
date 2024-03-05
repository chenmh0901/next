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
  <div>
    <IonCard
      class="user-card__body"
      :class="mode === ShowMode.COL ? 'flex-col items-center' : 'flex-row'"
    >
      <Avatar :user="user" :plain="mode === ShowMode.COL" />
      <div class="m-1 text-lg">
        {{ user.name }}
      </div>
    </IonCard>
  </div>
</template>

<style scoped>
.user-card__body {
  @apply flex m-0 shadow-xl rounded-lg;
}
</style>
