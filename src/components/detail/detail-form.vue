<script setup lang="ts">
import { IonContent } from '@ionic/vue';
import { useAuthStore } from '@/stores/auth.store';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { User } from '@/types/user';

const { getToken } = useAuthStore();

export interface IProps {
  editable?: boolean;
  userNo?: string;
}

const props = defineProps<IProps>();

const info = ref<User>();
onMounted(async () => {
  const token = await getToken();
  const config = {
    url: `http://localhost:3000/user/`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + token
    }
  };
  axios(config).then((res) => {
    info.value = res.data;
  });
});
</script>

<template>
  <ion-content>{{ info }}</ion-content>
</template>

<style scoped></style>
