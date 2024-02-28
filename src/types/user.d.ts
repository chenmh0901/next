export type User = {
  /**
   * 个人序列
   */
  id: number;
  no: number;
  name: string;
  /**
   * auth
   */
  isAdmin: boolean;
  /**
   * 联系方式
   */
  email?: string;
  wechat?: string;
  qq?: string;
  phone?: string;
  /**
   * 寝室班级号
   */
  className?: string;
  roomName?: string;
  /**
   * 地址
   */
  birthPlace?: string;
  address?: string;
  /**
   * 自我和管理员留言
   */
  selfResume?: string;
  adminResume?: string;

  [key: string]: string | number | undefined | null;
};
export type UserPhoto = {
  filepath: string;
  webviewPath: string;
};
