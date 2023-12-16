import { toast } from '@/utils/toast';
import { Form } from '@/types/form';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateForm = (form: Form) => {
  let approved = false;
  if (form.no.length === 0) {
    toast('学号不能为空', 1000);
  } else if (form.no.length !== 10) {
    toast('请输入正确的学号格式', 1000);
  } else if (form.password.length === 0) {
    toast('请输入密码', 1000);
  } else if (form.password.length < 6) {
    toast('请输入更安全的密码', 1000);
  } else if (form.email?.length === 0) {
    toast('请输入邮箱', 1000);
  } else if (form.email && !emailPattern.test(form.email)) {
    toast('请输入正确的邮箱格式', 1000);
  } else {
    approved = true;
  }
  return approved;
};
