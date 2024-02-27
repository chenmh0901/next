import { User } from '@/types/user';

export const exportToCsv = (filename: string, users: User[]) => {
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

  const rows = users.map((user) => headers.map((header) => user[header]));

  const csvContent =
    '\uFEFF' + [headers, ...rows].map((row) => row.join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
