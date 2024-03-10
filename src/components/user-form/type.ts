export interface ProfileField {
  type?: ProfileFieldType;
  key: string;
  label: string;
  iconifyName?: string;
  isSimple?: boolean;
  isPrivacy?: boolean;
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
  CHECKBOX
}

export const DEFAULT_PROFILE_FIELD = {
  type: ProfileFieldType.DEFAULT_TEXT,
  key: 'undefined',
  label: '未定义',
  iconifyName: 'prime:circle-off',
  isSimple: false,
  isPrivacy: false
};
export const PROFILE_FIELDS: ProfileField[] = [
  {
    key: 'name',
    label: '姓名',
    iconifyName: 'mdi:person-outline',
    isSimple: true
  },
  { type: ProfileFieldType.OPTIONS, key: 'sex', label: '性别', isSimple: true },
  {
    key: 'roomName',
    label: '寝室',
    iconifyName: 'mdi:bedroom-outline',
    isSimple: true
  },
  {
    type: ProfileFieldType.OPTIONS,
    key: 'className',
    label: '班级',
    iconifyName: 'mdi:class',
    isSimple: true
  },
  { key: 'no', label: '学号', iconifyName: 'mdi:card-account-details-outline' },
  { key: 'email', label: '邮箱', iconifyName: 'mdi:email-outline' },
  {
    key: 'wechat',
    label: '微信',
    iconifyName: 'mdi:wechat',
    isPrivacy: true
  },
  {
    type: ProfileFieldType.DATE,
    key: 'birthday',
    label: '生日',
    iconifyName: 'mdi:birthday-cake-outline',
    isPrivacy: true
  },
  { key: 'qq', label: 'QQ', iconifyName: 'ri:qq-line', isPrivacy: true },
  {
    key: 'birthPlace',
    label: '籍贯',
    iconifyName: 'mdi:book-marker-outline',
    isPrivacy: true
  },
  {
    key: 'phone',
    label: '手机',
    iconifyName: 'mdi:phone-in-talk-outline',
    isPrivacy: true
  },
  {
    key: 'address',
    label: '地址',
    iconifyName: 'mdi:address-marker-outline',
    isPrivacy: true
  },
  {
    type: ProfileFieldType.TEXTAREA,
    key: 'selfResume',
    label: '简介',
    iconifyName: 'mdi:comment-outline',
    isPrivacy: true
  }
];
export const PROFILE_FIELDS_ADMIN: ProfileField[] = [
  ...PROFILE_FIELDS,
  {
    type: ProfileFieldType.TEXTAREA,
    key: 'adminResume',
    label: '留言',
    iconifyName: 'mdi:message-text-outline',
    isPrivacy: true
  },
  {
    type: ProfileFieldType.CHECKBOX,
    key: 'isAdmin',
    label: '管理员',
    iconifyName: 'mdi:account-check-outline',
    isPrivacy: true
  }
];
export enum UserFormMode {
  READ,
  EDIT
}
