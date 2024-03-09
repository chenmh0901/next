<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useEasyToggle } from '@/composables/use-easy-toggle';
import { onMounted } from 'vue';

const { val, toggle } = useEasyToggle(['light', 'dark']);

function toggleTheme() {
  const checked = val.value == 'light';
  toggle();
  document.body.classList.toggle('dark', checked);
}

onMounted(() => {
  // init theme
  val.value = document.body.classList.contains('dark') ? 'dark' : 'light';
});
</script>

<template>
  <IonButtons slot="end" class="theme-toggle">
    <Icon
      class="theme-toggle"
      icon="line-md:light-dark-loop"
      @click="toggleTheme"
    />
  </IonButtons>
</template>

<style scoped>
.theme-toggle {
  @apply w-[25px] h-[25px];
  transition: all 0.2s;
}
</style>
