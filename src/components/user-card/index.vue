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
  <div class="user-card">
    <!-- 三个三个的 -->
    <div v-if="mode == ShowMode.ROW">
      <IonCard class="user-card__body flex-col items-center">
        <Avatar class="flex" :user="user" plain />
        <div class="text-lg">
          {{ user.name }}
        </div>
      </IonCard>
    </div>

    <!-- 一个一行 -->
    <div v-else class="w-full">
      <IonCard class="user-card__body">
        <Avatar class="flex" :user="user" />
        <div class="text-lg">
          {{ user.name }}
        </div>
      </IonCard>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  @apply flex;
}

.user-card__body {
  @apply flex w-full m-0 shadow-xl rounded-lg;
}
</style>
