import { ref, Ref } from 'vue';

export interface EasyToggleOptions {
  default: any;
  source: Ref<any>;
}

export const useEasyToggle = (
  shufflingValues: any[],
  options?: EasyToggleOptions
) => {
  const val: Ref = ref(
    options?.default ?? options?.source.value ?? shufflingValues[0]
  );

  const _toggle = (draft?: any) => {
    if (draft) {
      val.value = draft;
      return;
    }

    // find index of current value
    const index = shufflingValues.indexOf(val.value);
    if (index === shufflingValues.length - 1) {
      val.value = shufflingValues[0];
      return;
    }

    // goto next value
    val.value = shufflingValues[index + 1];
  };

  const to = (draft: any) => {
    val.value = draft;
  };

  return {
    val,
    to,
    toggle: () => _toggle()
  };
};
