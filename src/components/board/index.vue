<script lang="ts" setup>
import { IonCard } from '@ionic/vue';
import { computed, ref } from 'vue';
import DialogMsgCard from '@/components/board/components/dialog-msg-detail.vue';

const msgs = computed(() => {
  const msg = [];
  for (let i = 0; i < 3; i++) {
    msg.push({
      id: i + 1,
      userId: 1210204146,
      name: '陈明浩',
      date: '2024/2/5',
      type: '通知',
      title: '各位同学，紧急通知！紧急通知！',
      content: '我可以发广告吗？\n' +
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
const show = ref(false);
const msgDetail = ref();
</script>

<template>
  <div class="home-users flex flex-wrap">
    <div
      v-for="msg in msgs"
      :id="msg.id"
      :key="msg.id"
      class="'w-full p-1'"
    >
      <ion-card
        class="flex flex-row"
        @click="
          () => {
            msgDetail = msg.content;
            show = true;
          }
        "
      >
        <div class="w-1/3 h-1/3 p-5">
          <img
            alt="Grapefruit slice atop a pile of other slices"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            style="
              border-radius: 20px;
              width: 100%;
              height: 100%;
              box-shadow:
                rgba(0, 0, 0, 0.2) 0 4px 1px -2px,
                rgba(0, 0, 0, 0.14) 0 3px 2px 0,
                rgba(0, 0, 0, 0.12) 0 2px 5px 0;
            "
          />
        </div>
        <div class="flex flex-col justify-center p-5">
          <ion-card-title class="mb-2">{{ msg.type }}</ion-card-title>
          <ion-card-subtitle style="font-size: 1rem"> {{ msg.name }}</ion-card-subtitle>
          <ion-card-content class="p-0">{{ msg.title }}</ion-card-content>
          <ion-card-subtitle class="ml-20"> 发布时间：{{ msg.date }}</ion-card-subtitle>
        </div>
      </ion-card>
    </div>
  </div>
  <dialog-msg-card :close="()=>{
    show=false
  }" :msg="msgDetail" :show="show"></dialog-msg-card>
</template>

<style scoped></style>
