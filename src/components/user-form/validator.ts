import { toast } from '@/utils/toast';
import { User } from '@/types/user';

interface ValidatorOptions {
  key: string;
  rule: RegExp;
  msg: string;
}
const VALIDATOR_OPTIONS: ValidatorOptions[] = [
  { key: 'no', rule: /^[0-9]{10}$/, msg: '学号格式错误' },
  { key: 'name', rule: /^[\u4e00-\u9fa5]{2,4}$/, msg: '请输入正确的姓名' },
  { key: 'email', rule: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: '邮箱格式错误' },
  { key: 'phone', rule: /^1[3-9]\d{9}$/, msg: '手机号格式错误' },
  { key: 'qq', rule: /^[1-9][0-9]{4,10}$/, msg: '请输入正确的QQ号' },
  {
    key: 'roomName',
    rule: /^[\u4e00-\u9fa5]{2}\d*-?\d{3,4}$/,
    msg: '请输入正确的宿舍名称，如东和8-324'
  }
];
export const validate = async (form: User) => {
  for (const item of VALIDATOR_OPTIONS) {
    if (form[item.key] && !item.rule.test(form[item.key] as string)) {
      await toast(item.msg);
      return false;
    }
  }
  return true;
};
