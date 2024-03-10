import { Directory, Filesystem } from '@capacitor/filesystem';
import { User } from '@/types/user';
import { Share } from '@capacitor/share';

export async function exampleCreateAndShareFile(user: User) {
  const jsonToCsv = (json: User) => {
    const keys = Object.keys(json);
    const values = Object.values(json);
    const delimiter = ',';

    return (
      keys.join(delimiter) +
      '\n' +
      values.map((v) => (v === null ? '' : v)).join(delimiter)
    );
  };
  const csv = jsonToCsv(user);
  const fileName = 'example.txt';
  const encoder = new TextEncoder();
  const data = encoder.encode(csv);

  const base64Data = btoa(String.fromCharCode(...Array.from(data)));
  const result = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Documents
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
