import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';

export const useUserStore = () => {
  const getUser = async () => {
    const options: IHttpOptions<any> = {
      path: 'user/me',
      method: 'get'
    };
    return await useHttp<User>(options);
  };
  const isAdmin = async () => {
    const { data } = await getUser();
    return data.isAdmin;
  };
  return { isAdmin, getUser };
};
