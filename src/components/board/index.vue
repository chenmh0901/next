<script lang="ts" setup>
import { computed } from 'vue';
import MessageList from '@/components/board/components/message-list.vue';

const msgs = computed(() => {
  const msg = [];
  for (let i = 0; i < 3; i++) {
    msg.push({
      id: i + 1,
      userId: 1210204146,
      time: '2024/2/5',
      content:
        '我可以发广告吗？\n' +
        '后端实习薪资 400～500/天.\n' +
        '还有 产品，前端，运营，基架\n' +
        '工作时间弹性，免费三餐下午茶，21 点半后下班免费打车\n' +
        '多 Base,北京、上海、杭州、深圳、成都。\n' +
        '有很多学长学姐是同事，每届 2～3 个。\n' +
        '内推码可以私信我。'
    });
  }
  return msg;
});
</script>

<template>
  <MessageList :msgs="msgs" />
</template>

<style scoped></style>
