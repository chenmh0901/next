<script setup lang="ts">
import { watch, ref } from 'vue';
import { IonList } from '@ionic/vue';
import { MessageType } from '@/views/board/components/type';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import MessageCard from '@/views/board/components/message-card.vue';
interface IProps {
  msgs: MessageType[];
}

const props = defineProps<IProps>();

const getUserName = async (userId: number) => {
  const options: IHttpOptions<any> = {
    path: `user/${userId}`,
    method: 'get'
  };
  const { data } = await useHttp<User>(options);
  return data.name;
};

const getUserNameDictionary = async (msgs: MessageType[]) => {
  const userIds = [...new Set(msgs.map((m) => m.userId))];
  const dictionary: Record<string, string> = {};
  for (const id of userIds) {
    dictionary[id] = await getUserName(id);
  }
  return dictionary;
};

const nameLoading = ref(true);
const nameDictionary = ref({});
watch(
  props,
  async () => {
    getUserNameDictionary(props.msgs).then((val) => {
      nameDictionary.value = val;
      nameLoading.value = false;
    });
  },
  {
    immediate: true
  }
);
</script>
<template>
  <IonList v-if="props.msgs && !nameLoading">
    <MessageCard
      v-for="msg in props.msgs"
      :key="msg.userId"
      :name-dict="nameDictionary"
      :msg="msg"
    />
  </IonList>
</template>

<style scoped></style>
