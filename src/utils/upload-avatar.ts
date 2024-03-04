import { IHttpOptions, useHttp } from '@/utils/http';

export const uploadAvatar = async (
  val: any,
  path: string,
  contentType: string
) => {
  const data = new FormData();
  data.append('file', val);
  const options: IHttpOptions<any> = {
    method: 'post',
    path,
    data,
    contentType
  };
  try {
    await useHttp(options);
    return true;
  } catch (error) {
    console.log('uploadAvatar', error);
    return null;
  }
};
