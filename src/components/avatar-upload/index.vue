<script setup lang="ts">
import { ref } from 'vue';
import { uploadAvatar } from '@/utils/upload-avatar';

const uploadEl = ref();
const upload = async () => {
  /**
   * @TODO get me -> 获取自己 userID
   */
  // await getSelf();
  if (uploadEl.value?.files.length > 0) {
    try {
      const file = uploadEl.value.files[0];
      await uploadAvatar(file, 'user/2/avatar', 'multipart/form-data');
      // @TODO 告诉外面上传成功 emit
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div>
    <input ref="uploadEl" type="file" style="display: none" @change="upload" />
    <slot :upload="() => uploadEl.click()" />
  </div>
</template>

<style scoped></style>
