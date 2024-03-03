<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
import { MessageType } from '@/components/board/type';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';
import { IHttpOptions, useHttp } from '@/utils/http';

interface IProps {
  msg: MessageType;
}

const props = defineProps<IProps>();
const name = ref();
const getUserName = async () => {
  const options: IHttpOptions<any> = {
    path: `user/${props.msg.userId}`,
    method: 'get'
  };
  const { data } = await useHttp<User>(options);
  name.value = data.name;
};
onMounted(getUserName);
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>发布时间: {{ msg?.time }}</IonCardSubtitle>
      <IonCardTitle>{{ name }}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent class="truncate ...">{{ msg?.content }}</IonCardContent>
  </IonCard>
</template>

<style scoped></style>
