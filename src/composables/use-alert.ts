import { alertController } from '@ionic/vue';
import { ref } from 'vue';

export const useAlert = (
  header: string,
  message: string,
  cssClass: string = 'alert'
) => {
  const userChoice = ref(false);
  const buttons = [
    {
      text: '取消',
      handler: () => {
        userChoice.value = false;
      }
    },
    {
      text: '继续',
      handler: () => {
        userChoice.value = true;
      }
    }
  ];
  const alert = async () => {
    const a = await alertController.create({
      header,
      message,
      buttons: buttons,
      cssClass
    });
    await a.present();
    await a.onDidDismiss();
  };
  return { userChoice, alert };
};
