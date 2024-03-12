import {
  Filesystem,
  Directory,
  FilesystemEncoding
} from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { User } from '@/types/user';
import { toast } from '@/utils/toast';

export const createAndShareCsv = async (users: User[]) => {
  const UsersToCsv = (u: User[]) => {
    const keys = Object.keys(u[0]); // ['name', 'age', 'email']
    const lines = u.map((row) =>
      keys.map((key) => JSON.stringify(row[key])).join(',')
    ); // [ '"John Doe",25,"
    lines.unshift(keys.join(',')); // ["name,age,email"]
    return lines.join('\n');
  };

  // const fileName = 'users.csv';
  const csv = UsersToCsv(users);
  // const result = await Filesystem.writeFile({
  //   path: fileName,
  //   data: csv,
  //   directory: Directory.Documents,
  //   encoding: FilesystemEncoding.UTF8
  // });
  const result = URL.createObjectURL(
    new Blob([csv], { type: 'text/plain' })
  );

  try {
    await Share.share({
      title: '分享用户列表',
      text: '分享至任意 APP 或社交网站',
      files: [result],
      dialogTitle: '分享用户列表'
    });
    return true;
  } catch (error) {
    await toast('分享失败 ' + error);
    return null;
  }
};

export async function exampleCreateAndDownloadFile() {
  const fileName = 'example.txt';
  const fileContent = 'Hello, world!';

  const result = URL.createObjectURL(
    new Blob([fileContent], { type: 'text/plain' })
  );

  const link = document.createElement('a');
  link.download = fileName;
  link.href = result;
  link.click();
}
export async function exampleCreateAndShareFile() {
  const fileName = 'example.txt';
  const fileContent = 'Hello, world!, 123, 123, 123';

  const result = await Filesystem.writeFile({
    path: fileName,
    data: fileContent,
    directory: Directory.Documents,
    encoding: FilesystemEncoding.UTF8
  });

  try {
    await Share.share({
      title: 'Example File',
      text: 'Check out this example file',
      url: result.uri,
      dialogTitle: 'Share this example file'
    });
  } catch (error) {
    console.error('Error sharing file', error);
  }
}
