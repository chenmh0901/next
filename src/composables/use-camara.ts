import { Camera, CameraResultType } from '@capacitor/camera';
import { UserPhoto } from '@/types/user';
import { ref } from 'vue';

export const useCamera = () => {
  const photo = ref<UserPhoto>({
    filepath: '',
    webviewPath: ''
  });
  const takePhoto = async () => {
    try {
      const p = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      if (p.webPath) {
        photo.value.webviewPath = p.webPath;
      }
    } catch (e) {
      console.error('Error', e);
    }
  };
  return { photo, takePhoto };
};
