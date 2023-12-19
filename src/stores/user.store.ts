import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '@/types/user';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>();
  return {
    user
  };
});
