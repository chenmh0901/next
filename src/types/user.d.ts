export type User = {
  id: number;
  no: string;
  name: string;
  admin: boolean;
  email?: string;
  wechat?: string;
  QQ?: string;
  phone?: string;
  class?: string;
  room?: string;
  birthPlace?: string;
  resume?: string;
  [key: string]: any;
};
