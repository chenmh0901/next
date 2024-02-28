export interface ProfileField {
  type?: ProfileFieldType;
  key: string;
  label: string;
}

export interface ProfilePickerField extends ProfileField {
  options: string[];
}

export const PICKER_OPTIONS: ProfilePickerField[] = [
  {
    key: 'sex',
    label: '性别',
    options: ['男', '女']
  },
  {
    key: 'className',
    label: '班级',
    options: ['数媒211', '数媒212']
  }
];

export enum ProfileFieldType {
  DEFAULT_TEXT,
  TEXTAREA,
  OPTIONS,
  DATE,
  NUMBER
}

export const PROFILE_FIELDS: ProfileField[] = [
  { key: 'name', label: '姓名' },
  { key: 'no', label: '学号' },
  { type: ProfileFieldType.OPTIONS, key: 'sex', label: '性别' },
  { type: ProfileFieldType.DATE, key: 'birthday', label: '生日' },
  { key: 'email', label: '邮箱' },
  { key: 'wechat', label: '微信' },
  { key: 'qq', label: 'QQ' },
  { key: 'birthPlace', label: '籍贯' },
  { key: 'phone', label: '手机' },
  { type: ProfileFieldType.OPTIONS, key: 'className', label: '班级' },
  { key: 'roomName', label: '寝室' },
  { key: 'address', label: '地址' },
  { type: ProfileFieldType.TEXTAREA, key: 'selfResume', label: '简介' }
];

export interface UserFormMode {
  type: 'EDIT' | 'READ';
  placeholder?: string;
}
