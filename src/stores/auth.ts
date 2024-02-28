import { Storage } from '@ionic/storage';

interface IToken {
  val: string;
  time: number;
}

export const useAuthStore = () => {
  const storage = new Storage();

  const setToken = async (t: string) => {
    const s = await storage.create();
    const token: IToken = { val: t, time: new Date().getTime() };
    await s.set('token', token);
  };

  const getToken = async () => {
    const s = await storage.create();
    const token = await s.get('token');
    const expireTime = 7 * 24 * 60 * 60 * 1000;
    if (checkTokenExpire(token, expireTime)) {
      return token.val;
    } else {
      await removeToken();
      return null;
    }
  };
  const checkTokenExpire = (token: IToken, expireTime: number) => {
    const currentTime = new Date().getTime();
    if (token) {
      return currentTime - token.time < expireTime;
    }
  };

  const removeToken = async () => {
    const s = await storage.create();
    await s.set('token', null);
  };

  return { setToken, getToken, removeToken };
};
