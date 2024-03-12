<script setup lang="ts">
import { ref } from 'vue';
import { uploadAvatar } from '@/utils/upload-avatar';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import { useAlert } from '@/composables/use-alert';

const emit = defineEmits<{
  (e: 'uploaded', val: boolean): void;
}>();
const { userChoice, alert } = useAlert({ header: '是否上传头像' });
const uploadEl = ref();
const upload = async () => {
  const id = await getSelfId();
  if (uploadEl.value?.files.length > 0) {
    try {
      const file = uploadEl.value.files[0];
      const uploaded = await uploadAvatar(
        file,
        `user/${id}/avatar`,
        'multipart/form-data'
      );

      await alert();
      if (uploaded && userChoice.value) {
        emit('uploaded', uploaded);
      }
    } catch (error) {
      console.log('avatar-upload', error);
    }
  }
};
const getSelfId = async () => {
  const options: IHttpOptions<any> = {
    path: 'user/me',
    method: 'get'
  };
  const { data } = await useHttp<User>(options);
  return data.id;
};
</script>

<template>
  <div>
    <input ref="uploadEl" type="file" style="display: none" @change="upload" />
    <slot :upload="() => uploadEl.click()" />
  </div>
</template>

<style scoped></style>
