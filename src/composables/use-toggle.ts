import { isRef, Ref, ref } from 'vue';
import { toValue } from '@vueuse/core';

//参数类型不是ref 而是普通的boolean
export const useToggle = <T>(Val: Ref<T> | T, options?: { Truthy: T, Falsy: T }) => {
  //declare val => Ref
  const val: Ref<T> = isRef(Val) ? Val : ref(Val) as Ref;
  const toggle = (newVal?: T) => {
    // newVal=false
    if (newVal !== undefined) {
      val.value = toValue(newVal);
    } else {
      if (typeof val.value == 'boolean') {
        //declare val.value => boolean
        val.value = !val.value as T;
      } else {
        val.value = val.value === options?.Truthy ? options.Falsy : options?.Truthy as T;
      }
    }
  };
  return {
    val,
    toggle
  };
};
