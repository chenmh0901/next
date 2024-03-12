import { alertController } from '@ionic/vue';
import { ref } from 'vue';
interface AlertOptions {
  header: string;
  message?: string;
  btnstext?: string[];
}
export const useAlert = (options: AlertOptions) => {
  const userChoice = ref(false);
  const btnstext = options.btnstext;
  const buttons = [
    {
      text: btnstext?.[0] ?? '取消',
      handler: () => {
        userChoice.value = false;
      }
    },
    {
      text: btnstext?.[1] ?? '确认',
      handler: () => {
        userChoice.value = true;
      }
    }
  ];
  const alert = async () => {
    const a = await alertController.create({
      header: options.header,
      message: options.message,
      buttons: buttons
    });
    await a.present();
    await a.onDidDismiss();
  };
  return { userChoice, alert };
};
