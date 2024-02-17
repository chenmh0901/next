import { Storage } from '@ionic/storage';

export const useAuthStore = () => {
  const storage = new Storage();

  const setToken = async (t: string) => {
    const s = await storage.create();

    s.create().then((s) => {
      s.set('token', t);
    });
  };

  const getToken = async () => {
    const s = await storage.create();

    return s.get('token');
  };
  return { setToken, getToken };
};
