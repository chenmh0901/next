import { defineStore } from 'pinia';
import { Storage } from '@ionic/storage';

export const useAuthStore = defineStore('auth', () => {
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

  return {
    getToken,
    setToken
  };
});
