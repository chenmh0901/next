import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import { User } from '@/types/user';

const DEV_URL = 'http://119.12.173.244:8080/';
const authStore = useAuthStore();

export interface IHttpOptions<T extends IRequestBody> {
  method: 'post' | 'get' | 'put' | 'delete' | 'patch';
  path: string;
  contentType?: string;
  data?: T;
}

export interface IUserResponse {
  data: User;
}

interface IRequestBody {
  [key: string]: any;
}

interface IResponseBody {
  [key: string]: any;
}

export const useHttp = async <R extends IResponseBody>(
  options: IHttpOptions<IRequestBody>
) => {
  const config = {
    method: options.method,
    url: DEV_URL + options.path,
    headers: {
      'Content-Type': options.contentType ?? 'application/json',
      Authorization: `Bearer ` + (await authStore.getToken())
    },
    data: options.data
  };
  return axios<R>(config);
};
