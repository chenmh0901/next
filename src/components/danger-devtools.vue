<script setup lang="ts">
import {useDraggable} from "@vueuse/core";
import {computed, ref} from "vue";
import {useDevStore} from "@/stores/dev.store";

const devStore = useDevStore()

// draggable
const el = ref(null)
const {style} = useDraggable(el, {
  initialValue: {x: 40, y: 40}
})

// need render?
const show = computed(() => {
  return devStore.logs.length || devStore.elements.length
})
</script>

<template>
  <div v-if="show" ref="el" style="position: fixed;" :style="style">
    <el-card>
      <!-- logs -->
      <el-text v-if="devStore.logs.length" size="large">Logs</el-text>
      <br>
      <template v-for="log of devStore.logs" :key="log">
        <el-text>{{ log }}</el-text>
        <br/>
      </template>

      <!-- custom elements -->
      <el-text v-if="devStore.elements.length" size="large">Elements</el-text>
    </el-card>
  </div>
</template>

<style scoped>

</style>