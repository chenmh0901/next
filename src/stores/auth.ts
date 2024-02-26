import { Storage } from '@ionic/storage';

export const useAuthStore = () => {
  const storage = new Storage();

  const setToken = async (t: string) => {
    const s = await storage.create();
    await s.set('token', t);
  };

  const getToken = async () => {
    const s = await storage.create();

    return s.get('token');
  };

  const removeToken = async () => {
    const s = await storage.create();
    await s.set('token', null);
  };

  return { setToken, getToken, removeToken };
};
