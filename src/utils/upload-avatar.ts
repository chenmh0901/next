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
    const { data } = await useHttp(options);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
