import axios from 'axios/index';
import { useAuthStore } from '@/stores/auth.store';

export interface IHttpOptions<T extends IRequestBody> {
  method: 'post' | 'get' | 'put' | 'delete' | 'patch';
  url: string;
  data: T;
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
  const token = await useAuthStore().getToken();
  const config = {
    method: options.method,
    url: options.url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    data: options.data
  };
  return axios<R>(config);
};
