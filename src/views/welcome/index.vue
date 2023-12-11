<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import Hello from "@/views/welcome/hello.vue";
import Signin from "@/views/welcome/signin.vue";
import Signup from "@/views/welcome/signup.vue";
import Detail from "@/views/welcome/detail.vue";
import {useDevStore} from "@/stores/dev.store";

const dev = useDevStore()
const components = [
  Hello,
  Signin,
  Signup,
  Detail
]

const onSlide = (swiper: any) => {
  dev.log(swiper.activeIndex)
}
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