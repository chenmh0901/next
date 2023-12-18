import { toast } from '@/utils/toast';
import { User } from '@/types/user';
export const validateDetailForm = (f: User | undefined) => {
  const phonePattern = /^1[3456789]\d{9}$/;
  const namePattern = /^[\u4e00-\u9fa5]{2,4}$/;
  for (const i in f) {
    if (Object.prototype.hasOwnProperty.call(f, i)) {
      if (i.length == 0) {
        toast('请填写完整信息');
        return false;
      }
    }
  }
  if (f?.name && !namePattern.test(f.name)) {
    toast('请输入正确的姓名');
  } else if (f?.phone && !phonePattern.test(f.phone)) {
    toast('请输入正确的手机号');
  } else {
    return true;
  }
  return false;
};
