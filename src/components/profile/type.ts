export interface ProfileField {
  type?: ProfileFieldType;
  key: string;
  label: string;
}

export interface ProfilePickerField extends ProfileField {
  name: string;
  options: string[];
}

export enum ProfileFieldType {
  DEFAULT_TEXT,
  TEXTAREA,
  OPTIONS,
  DATE,
  NUMBER
}

export const PROFILE_FIELDS: ProfileField[] = [
  { key: 'name', label: '姓名' },
  { key: 'wechat', label: '微信' },
  { type: ProfileFieldType.OPTIONS, key: 'sex', label: '性别' },
  { type: ProfileFieldType.OPTIONS, key: 'className', label: '班级' },
  { key: 'roomName', label: '寝室' },
  { key: 'no', label: '学号' },
  { type: ProfileFieldType.DATE, key: 'birthday', label: '生日' },
  { key: 'birthPlace', label: '籍贯' },
  { key: 'phone', label: '手机' },
  { key: 'qq', label: 'QQ' },
  { key: 'email', label: '邮箱' },
  { type: ProfileFieldType.TEXTAREA, key: 'resume', label: '简介' }
];
