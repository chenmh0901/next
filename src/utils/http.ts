import axios from 'axios';

const DEV_URL = 'http://localhost:3000/';

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
      Authorization: `Bearer `
    },
    data: options.data
  };
  return axios<R>(config);
};
