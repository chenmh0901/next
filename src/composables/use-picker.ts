import { pickerController } from '@ionic/vue';
import { ref } from 'vue';

export const usePicker = (values: string[], defaultValue: string) => {
  const picked = ref<string>(defaultValue);
  const name = Math.random().toString();
  const handler = (val: any) => {
    picked.value = val[name].value;
  };

  const viewModel = {
    cancelButtonText: '取消',
    confirmButtonText: '确认'
  };

  const open = async () => {
    const p = await pickerController.create({
      columns: [
        {
          name,
          options: values.map((value) => {
            return { text: value, value };
          })
        }
      ],
      buttons: [
        {
          text: viewModel.cancelButtonText,
          role: 'cancel'
        },
        {
          text: viewModel.confirmButtonText,
          handler
        }
      ]
    });
    await p.present();
    await p.onDidDismiss();
  };

  return { picked, open };
};
