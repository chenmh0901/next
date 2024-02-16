<script lang="ts" setup>
interface IProps {
  msg: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col items-center p-[5px]">
    <h1 style="font-size: 20px">通知</h1>
    <div>{{ props.msg }}</div>
  </div>
</template>

<style scoped></style>
