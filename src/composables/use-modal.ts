import { modalController } from '@ionic/vue';

export const useModal = (component: any) => {
  const open = async () => {
    try {
      // open modal
      const modal = await modalController.create({
        component
      });
      await modal.present();

      // return modal data
      const { data } = await modal.onWillDismiss();
      return data;
    } catch (e) {
      console.error('Error', e);
      return null;
    }
  };

  return {
    open
  };
};
