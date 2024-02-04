import { Ref , ref} from 'vue';

export function useToggle<T=boolean>(intialvalue:T|Ref<T>=false):[Ref<T>,()=>void]{
  const value=ref<T>(intialvalue);

  const toggle=()=>{
    value.value=!value.value;
  };
  return [value,toggle];
}