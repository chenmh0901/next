import { defineStore } from 'pinia';
import { Storage } from '@ionic/storage';
import { User } from '@/types/user';

export const useUserStore = defineStore('user', () => {
  const getUser = () => {
    return new Promise<User>((resolve, reject) => {
      const storage = new Storage();
      storage.create().then((s) => {
        s.get('user')
          .then((t) => resolve(t))
          .catch((e) => reject(e));
      });
    });
  };
  const setUser = (t: User) => {
    return new Promise<User>((resolve, reject) => {
      const storage = new Storage();
      storage.create().then((s) => {
        s.set('user', t)
          .then((t) => resolve(t))
          .catch((e) => reject(e));
      });
    });
  };

  const isAdmin = async () => {
    const u = await getUser();
    return u.admin;
  };

  return {
    getUser,
    setUser,
    isAdmin
  };
});
