import { Camera, CameraResultType } from '@capacitor/camera';

export const useCamera = () => {
  const open = () => {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((r) => {
      console.log(r.webPath);
    });
  };
  return { open };
};
