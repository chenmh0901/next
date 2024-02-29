import { AuthForm } from '@/pages/signin/type';
import { toast } from '@/utils/toast';

enum PageMode {
  SIGNIN = 'login',
  SIGNUP = 'register'
}

export const validate = async (form: AuthForm, mode: PageMode) => {
  const namePattern = /^[\u4e00-\u9fa5]{2,4}$/;

  for (const i in form) {
    if (!form[i as keyof AuthForm]) {
      await toast('请填写完整信息');
      return false;
    }
  }

  if (form.no?.length != 10) {
    await toast('学号不正确');
    return false;
  }
  if (form.name && !namePattern.test(form.name)) {
    await toast('请填写正确的姓名');
    return false;
  }
  if (mode === PageMode.SIGNUP && form.password?.length < 6) {
    await toast('密码过于简单');
    return false;
  }

  return true;
};
