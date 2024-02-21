import { pickerController } from '@ionic/vue';
import { ref } from 'vue';

export const usePicker = (defaultValue: string, values: any[]) => {
  const picked = ref<string>(defaultValue);
  const name = Math.random().toString();
  const handler = (val: any) => {
    picked.value = val[name].value;
  };

  const viewModel = {
    cancelButtonText: '取消',
    confirmButtonText: '确认'
  };

  const open = () => {
    pickerController
      .create({
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
      })
      .then((p) => {
        p.present();
      });
  };

  return { picked, open };
};
