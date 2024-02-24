import { Camera, CameraResultType } from '@capacitor/camera';
import { UserPhoto } from '@/types/user';
import { ref } from 'vue';

export const useCamera = () => {
  const photo = ref<UserPhoto>({ filepath: '', webviewPath: '' });
  const take = () => {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((p) => {
      if (p.webPath) {
        photo.value.webviewPath = p.webPath;
      }
    });
  };
  return { take, photo };
};
