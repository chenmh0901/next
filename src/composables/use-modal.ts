import { modalController } from '@ionic/vue';

export const useModal = () => {
  const open = async (
    component: any,
    componentProps?: any,
    cssClass?: string
  ) => {
    try {
      // open modal
      const modal = await modalController.create({
        component,
        componentProps,
        cssClass
      });
      await modal.present();

      // return modal data
      const { data } = await modal.onDidDismiss();
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
