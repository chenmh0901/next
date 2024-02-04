import { Ref } from 'vue';

export const useEasyToggle = (val: Ref<boolean>) => {
  const toggle = () => {
    val.value = !val.value;
  };
  return {
    val,
    toggle
  };
};
