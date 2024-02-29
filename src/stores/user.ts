import { Storage } from '@ionic/storage';
import { User } from '@/types/user';

export const useUserStore = () => {
  const storage = new Storage();

  const setUser = async (u: User) => {
    const s = await storage.create();
    await s.set('user', u);
  };
  const getUser = async () => {
    const s = await storage.create();
    return await s.get('user');
  };
  const isAdmin = async () => {
    const u = (await getUser()) as User;
    return u.isAdmin;
  };
  return { getUser, setUser, isAdmin };
};
