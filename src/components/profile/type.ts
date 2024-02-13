export interface Type {
  type?: ProfileFieldType;
  key: string;
  label: string;
}

export interface PickerField {
  type: ProfileFieldType;
  column: [{ name: string; options: Option[] }];
}

export interface Option {
  text: string;
  value: string;
}

export enum ProfileFieldType {
  DEFAULT_TEXT,
  TEXTAREA,
  OPTIONS,
  DATE,
  NUMBER
}

export const PROFILE_FIELDS: Type[] = [
  { key: 'name', label: '姓名' },
  { key: 'wechat', label: '微信' },
  { type: ProfileFieldType.OPTIONS, key: 'sex', label: '性别' },
  { type: ProfileFieldType.OPTIONS, key: 'class', label: '班级' },
  { key: 'room', label: '寝室' },
  { key: 'no', label: '学号' },
  { type: ProfileFieldType.DATE, key: 'birthday', label: '生日' },
  { key: 'birthPlace', label: '籍贯' },
  { key: 'phone', label: '手机' },
  { key: 'QQ', label: 'QQ' },
  { key: 'email', label: '邮箱' },
  { type: ProfileFieldType.TEXTAREA, key: 'resume', label: '简介' }
];

export const PICKER_COLUMNS: PickerField[] = [
  {
    type: ProfileFieldType.SEX,
    column: [
      {
        name: 'sex',
        options: [
          {
            text: '男',
            value: 'Male'
          },
          {
            text: '女',
            value: 'Female'
          }
        ]
      }
    ]
  },
  {
    type: ProfileFieldType.CLASS,
    column: [
      {
        name: 'class',
        options: [
          {
            text: '数媒211',
            value: 'class211'
          },
          {
            text: '数媒212',
            value: 'class212'
          }
        ]
      }
    ]
  }
];
