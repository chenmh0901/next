import { User } from '@/types/user';

export const exportToCsv = (filename: string, users: User[]) => {
  // 提取字段名，这取决于 User 接口的结构
  const headers = [
    'id',
    'no',
    'name',
    'admin',
    'email',
    'wechat',
    'qq',
    'phone',
    'className',
    'roomName',
    'birthPlace',
    'address',
    'selfResume',
    'adminResume'
  ];

  // 提取每个用户的数据
  const rows = users.map((user) => headers.map((header) => user[header]));

  // 添加 BOM 和 CSV 格式
  const csvContent =
    '\uFEFF' + [headers, ...rows].map((row) => row.join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    // 特性检查
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
