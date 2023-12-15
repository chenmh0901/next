<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import Hello from '@/views/welcome/hello.vue';
import Signin from '@/views/welcome/signin.vue';
import Signup from '@/views/welcome/signup.vue';
import { useDevStore } from '@/stores/dev.store';
import { useAuthStore } from '@/stores/auth.store';
import { computed } from 'vue';

const dev = useDevStore();
const authStore = useAuthStore();

// TODO 初始化时
// 1. 如果还没成功登录过，按照常规的新用户情况处理
// 2. 如果登陆过，不再显示第 1, 2 页，即不再显示 hello 和 signup
// 3. 第4页 detail 和上面的逻辑是分开的，只需要判断用户的数据完整不完整，需不需要填写表单就好了

const components = computed(() => {
  const list = [];
  const token = authStore.getToken();
  if (!token) {
    list.push(Hello, Signup);
  }

  list.push(Signin);
  return list;
});
const onSlide = (swiper: any) => {
  dev.log(swiper.activeIndex);
};
</script>

<template>
  <Swiper navigation @slideChange="onSlide" class="swiper">
    <SwiperSlide v-for="(c, i) of components" :key="i">
      <component :is="c"></component>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  height: 100%;
}
</style>
