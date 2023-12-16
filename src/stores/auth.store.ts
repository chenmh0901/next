import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '@/types/user';
import { Storage } from '@ionic/storage';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>();

  const getToken = () => {
    return new Promise<string>((resolve, reject) => {
      const storage = new Storage();
      storage.create().then((s) => {
        s.get('token')
          .then((t) => resolve(t))
          .catch((e) => reject(e));
      });
    });
  };
  const setToken = (t: string) => {
    return new Promise<string>((resolve, reject) => {
      const storage = new Storage();
      storage.create().then((s) => {
        s.set('token', t)
          .then((t) => resolve(t))
          .catch((e) => reject(e));
      });
    });
  };

  const setUser = (u: any) => {
    user.value = u;
  };

  return {
    user,
    getToken,
    setToken,
    setUser
  };
});
