import { isRef, Ref, ref } from 'vue';
import { toValue } from '@vueuse/core';
export type MaybeRefOrGetter<T>=T|Ref<T>|(()=>T)
export interface UseToggleOptions<Truthy,Falsy>{
  Truthy:MaybeRefOrGetter<Truthy>,
  Falsy:MaybeRefOrGetter<Falsy>
}
//return [T,void] | T
export function useToggle<Truthy=true,Falsy=false,T=Truthy|Falsy>(
  initialValue?:T,
  options?:UseToggleOptions<Truthy, Falsy>
):[Ref<T>,(value?:T)=>T]|((value?:T)=>T){
  const value=ref(initialValue);
  const {tValue,fValue}=options||{};
  const toggle=(newValue?:T)=>{
    if(newValue!==undefined){
      value.value=newValue;
    }else{
      const currentValue=value.value;
      const tVal=tValue!==undefined ?toValue(tValue):true;
      const fVal=fValue!==undefined ?toValue(fValue):false;
      value.value=currentValue===tVal?fVal:tVal;
    }
    return value.value;
  };

  if(initialValue !==undefined && isRef(initialValue)){
    return [value,toggle];
  }else{
    return toggle;
  }
}
