import { Camera, CameraResultType } from '@capacitor/camera';
import { ref, computed } from 'vue';

interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

export const useCamera = () => {
  const photo = ref<UserPhoto>({
    filepath: '',
    webviewPath: ''
  });

  const url = computed(() => {
    if (photo.value.webviewPath) {
      return photo.value.webviewPath;
    }
    return null;
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
  return { url, photo, takePhoto };
};
