<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const uploadEl = ref();
const upload = async () => {
  if (uploadEl.value?.files.length > 0) {
    const file = uploadEl.value.files[0];
    console.log(uploadEl.value.files);
    const data = new FormData();
    data.append('file', file);
    const config = {
      method: 'post',
      url: 'http://localhost:8080/user/1/avatar',
      data: data
    };
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div>
    <input ref="uploadEl" type="file" style="display: none" @change="upload" />
    <ion-button @click="uploadEl.click()">Select File</ion-button>
    <ion-button @click="upload">Upload</ion-button>
  </div>
</template>

<style scoped></style>
