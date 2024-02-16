import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const DEV_URL = 'http://localhost:8080/';
const authStore = useAuthStore();

export interface IHttpOptions<T extends IRequestBody> {
  method: 'post' | 'get' | 'put' | 'delete' | 'patch';
  path: string;
  data?: T;
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
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + (await authStore.getToken())
    },
    data: options.data
  };
  return axios<R>(config);
};
