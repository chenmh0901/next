import { pickerController } from '@ionic/vue';
import { ref } from 'vue';

export interface PickerCol {
  values: string[];
  defaultValue: string;
}

export interface PickerGroup {
  name: string;
  col: PickerCol;
}

export const usePicker = (groups: PickerGroup[]) => {
  const picked = ref<string>();
  const key = Math.random().toString();

  const onConfirm = (val: any) => {
    picked.value = groups
      .map((group: PickerGroup) => {
        return val[group.name + key].value;
      })
      .join();
  };

  const viewModel = {
    cancelButtonText: '取消',
    confirmButtonText: '确认'
  };

  const open = async () => {
    const p = await pickerController.create({
      // columns 大列
      columns: groups.map((group: PickerGroup) => {
        return {
          name: group.name + key,
          options: group.col.values.map((val: string) => {
            return {
              text: val,
              value: val
            };
          })
        };
      }),
      buttons: [
        {
          text: viewModel.cancelButtonText,
          role: 'cancel'
        },
        {
          text: viewModel.confirmButtonText,
          handler: onConfirm
        }
      ]
    });
    await p.present();
    await p.onDidDismiss();
  };

  return { picked, open };
};
