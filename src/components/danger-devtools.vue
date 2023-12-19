<script setup lang="ts">
import { useDraggable } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useDevStore } from '@/stores/dev.store';

const devStore = useDevStore();

// draggable
const el = ref(null);
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 }
});

// need render?
const show = computed(() => {
  // when debug, always show
  return false;
  // return devStore.logs.length || devStore.elements.length;
});
</script>

<template>
  <div v-if="show" ref="el" style="position: fixed" :style="style">
    <el-card>
      <el-text>Easy devtools</el-text>
      <br />
      <!-- Router -->
      <ion-button
        class="danger-router-button"
        href="home"
        size="small"
        style="margin-bottom: 5px"
        >go home
      </ion-button>
      <br />
      <ion-button class="danger-router-button" size="small" href="detail"
        >go detail
      </ion-button>

      <!-- logs -->
      <el-text v-if="devStore.logs.length" size="large">Logs</el-text>
      <br />
      <template v-for="log of devStore.logs" :key="log">
        <el-text>{{ log }}</el-text>
        <br />
      </template>

      <!-- custom elements -->
      <el-text v-if="devStore.elements.length" size="large">Elements</el-text>
    </el-card>
  </div>
</template>

<style scoped>
ion-button {
  --background: linear-gradient(45deg, #e66465, #9198e5) !important;
  --color: #fff;
}
</style>
