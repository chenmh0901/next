<script setup lang="ts">
import { IonContent } from '@ionic/vue';

// TODO 这是欢迎页，打开APP默认在这里，应该介绍一下芸馆的功能，有一些装饰图片图标之类的
</script>

<template>
  <ion-content>
    <div class="hello">
      <h1>👋你好啊，欢迎你加入芸馆</h1>
      <p>往右滑查看更多吧👉</p>
    </div>
  </ion-content>
</template>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
