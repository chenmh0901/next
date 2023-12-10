<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import Hello from "@/views/welcome/hello.vue";
import Signin from "@/views/welcome/signin.vue";
import Signup from "@/views/welcome/signup.vue";
import Detail from "@/views/welcome/detail.vue";

const components = [
  Hello,
  Signin,
  Signup,
  Detail
]
</script>

<template>
  <Swiper class="swiper">
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