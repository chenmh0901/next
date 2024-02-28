export interface ProfileField {
  type?: ProfileFieldType;
  key: string;
  label: string;
  iconifyName?: string;
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

export const DEFAULT_PROFILE_FIELD = {
  type: ProfileFieldType.DEFAULT_TEXT,
  key: 'undefined',
  label: '未定义',
  iconifyName: 'prime:circle-off'
};
export const PROFILE_FIELDS: ProfileField[] = [
  {
    key: 'name',
    label: '姓名',
    iconifyName: 'material-symbols:person-outline'
  },
  { key: 'no', label: '学号' },
  { type: ProfileFieldType.OPTIONS, key: 'sex', label: '性别' },
  { type: ProfileFieldType.DATE, key: 'birthday', label: '生日' },
  { key: 'email', label: '邮箱' },
  { key: 'wechat', label: '微信', iconifyName: 'mingcute:wechat-line' },
  { key: 'qq', label: 'QQ', iconifyName: 'ri:qq-line' },
  { key: 'birthPlace', label: '籍贯', iconifyName: 'tdesign:address-book' },
  { key: 'phone', label: '手机', iconifyName: 'tabler:phone-call' },
  {
    type: ProfileFieldType.OPTIONS,
    key: 'className',
    label: '班级',
    iconifyName: 'ic:outline-class'
  },
  { key: 'roomName', label: '寝室', iconifyName: 'cil:room' },
  { key: 'address', label: '地址', iconifyName: 'mdi:address-marker-outline' },
  {
    type: ProfileFieldType.TEXTAREA,
    key: 'selfResume',
    label: '简介',
    iconifyName: 'mdi:comment-outline'
  },
  {
    key: 'adminResume',
    label: '留言',
    iconifyName: 'icon-park-outline:comment'
  }
];

export enum UserFormMode {
  READ,
  EDIT
}
