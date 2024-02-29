import { popoverController } from '@ionic/vue';

export const usePopover = () => {
  const open = async (component: any, Props: any) => {
    try {
      const popover = await popoverController.create({
        component: component,
        componentProps: Props
      });
      await popover.present();
      const { role } = await popover.onWillDismiss();
      return role;
    } catch (e) {
      console.error('Error', e);
      return null;
    }
  };
  return { open };
};
