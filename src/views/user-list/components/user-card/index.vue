<script setup lang="ts">
import { IonCard } from '@ionic/vue';
import Avatar from '@components/avatar/avatar.vue';
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
    <template v-if="mode == ShowMode.ROW">
      <IonCard class="user-card__body flex-col items-center">
        <div class="w-full aspect-square">
          <Avatar :user="user" plain />
        </div>

        <div class="text-lg">
          {{ user.name }}
        </div>
      </IonCard>
    </template>

    <!-- 一个一行 -->
    <div v-else class="w-full">
      <IonCard class="user-card__body">
        <Avatar class="flex m-2" :user="user" />
        <div
          class="text-lg flex-grow flex items-center justify-between pl-3 pr-5"
        >
          <span class="text-[22px]">{{ user.name }}</span>
          <span class="text-[16px]">{{ user.no }}</span>
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
