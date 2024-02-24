import { modalController } from '@ionic/vue';

export const useModal = (component: any) => {
  const open = async () => {
    try {
      const modal = await modalController.create({
        component
      });
      await modal.present(); // 打开弹窗
      return true;
    } catch (e) {
      console.error('Error', e);
      return false;
    }
  };

  return {
    open
  };
};
