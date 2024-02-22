import { modalController } from '@ionic/vue';

export const useModal = (component: any) => {
  const open = () => {
    modalController
      .create({
        component
      })
      .then((m) => m.present());
  };

  return {
    open
  };
};
