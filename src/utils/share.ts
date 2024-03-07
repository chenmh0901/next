import {
  Filesystem,
  Directory,
  FilesystemEncoding
} from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

export async function exampleCreateAndShareFile() {
  const fileName = 'example.txt';
  const fileContent = 'Hello, world!';
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
