<script setup lang="ts">
import { IonCard } from '@ionic/vue';
import Avatar from '@/components/avatar/index.vue';
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
      class="user-card"
      :class="mode === ShowMode.COL ? 'flex-col items-center' : 'flex-row'"
    >
      <!-- AVATAR -->
      <img
        v-if="mode === ShowMode.COL"
        alt="Silhouette of mountains"
        class="w-full aspect-square object-cover"
        :src="`https://ionicframework.com/docs/img/demos/avatar.svg`"
      />
      <div v-else>
        <Avatar :size="70" />
      </div>

      <div class="p-2 text-lg">
        {{ user.name }}
      </div>
    </IonCard>
  </div>
</template>

<style scoped>
.user-card {
  @apply flex m-1.5 shadow-xl;
}
</style>
