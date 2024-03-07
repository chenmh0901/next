import { modalController } from '@ionic/vue';
interface ModalOptions {
  component: any;
  property?: any;
  cssClass?: string;
}
export const useModal = () => {
  const open = async (options: ModalOptions) => {
    try {
      // open modal
      const modal = await modalController.create({
        component: options.component,
        componentProps: options.property,
        cssClass: options.cssClass
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
