import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDevStore = defineStore('dev', () => {
  const logs = ref<string[]>([]);
  const elements = ref<HTMLElement[]>([]);
  const log = (msg: string) => {
    logs.value.push(msg);
  };

  const attach = (el: HTMLElement) => {
    elements.value.push(el);
  };

  return {
    logs,
    elements,
    log,
    attach
  };
});
