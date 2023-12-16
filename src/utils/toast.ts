import { toastController } from '@ionic/vue';

export const toast = async (
  message: string,
  duration: number,
  position: 'top' | 'middle' | 'bottom' = 'top'
) => {
  const toast = await toastController.create({
    message,
    duration,
    position
  });

  await toast.present();
};
