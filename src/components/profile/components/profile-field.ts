export interface ProfileField {
  type?: ProfileFieldType;
  key: string;
  label: string;
}

export enum ProfileFieldType {
  DEFAULT_TEXT,
  TEXTAREA,
  DATE,
  NUMBER
}

export const PROFILE_FIELDS: ProfileField[] = [
  { key: 'name', label: '姓名' },
  { key: 'wechat', label: '微信' },
  { key: 'sex', label: '性别' },
  { key: 'class', label: '班级' },
  { key: 'room', label: '寝室' },
  { key: 'no', label: '学号' },
  { type: ProfileFieldType.DATE, key: 'birthday', label: '生日' },
  { key: 'birthPlace', label: '籍贯' },
  { key: 'phone', label: '手机' },
  { key: 'QQ', label: 'QQ' },
  { key: 'email', label: '邮箱' },
  { type: ProfileFieldType.TEXTAREA, key: 'resume', label: '简介' }
];
