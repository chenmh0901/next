import { toast } from '@/utils/toast';
import { User } from '@/types/user';
export const validateDetailForm = (u?: User) => {
  const phonePattern = /^1[3456789]\d{9}$/;
  const namePattern = /^[\u4e00-\u9fa5]{2,4}$/;
  for (const i in u) {
    if (Object.prototype.hasOwnProperty.call(u, i)) {
      if (i.length == 0) {
        toast('请填写完整信息');
        return false;
      }
    }
  }
  if (u?.name && !namePattern.test(u.name)) {
    toast('请输入正确的姓名');
    return false;
  }

  if (u?.phone && !phonePattern.test(u.phone)) {
    toast('请输入正确的手机号');
    return false;
  }

  return true;
};
