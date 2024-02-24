import { Camera, CameraResultType } from '@capacitor/camera';
import { UserPhoto } from '@/types/user';

export const useCamera = () => {
  const photo: UserPhoto = { filepath: '' };
  const take = () => {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((p) => {
      if (p.webPath) {
        photo.filepath = p.webPath;
      }
    });
  };
  return { take, photo };
};
