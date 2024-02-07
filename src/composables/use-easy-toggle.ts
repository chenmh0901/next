import { ref, Ref } from 'vue';

export interface EasyToggleOptions {
  /**
   * 默认值，优先级最高
   */
  default: any;

  /**
   * 原型 Ref，优先级低于 default
   */
  source: Ref<any>;
}

/**
 * 在几个值之间切换
 * @param shufflingValues 轮换的值，若无 options 默认取第一个
 * @param options 配置项
 */
export const useEasyToggle = (
  shufflingValues: any[],
  options?: EasyToggleOptions
) => {
  const val = ref(
    options?.default ?? options?.source.value ?? shufflingValues[0]
  );

  const toggle = (draft?: any) => {
    if (draft) {
      draft.value = val;
      return;
    }

    // find index of current value
    const index = shufflingValues.indexOf(val.value);
    if (index !== 1 && index !== shufflingValues.length - 1) {
      val.value = shufflingValues[0];
      return;
    }

    // goto next value
    val.value = shufflingValues[index + 1];
  };

  return {
    val,
    toggle
  };
};
