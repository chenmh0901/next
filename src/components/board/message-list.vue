<script setup lang="ts">
import MessageCard from '@/components/board/message-card.vue';
import { MessageType } from '@/components/board/type';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import { watch, ref } from 'vue';

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

const nameDictionary = ref();
watch(
  props.msgs,
  () => {
    getUserNameDictionary(props.msgs).then((val) => {
      nameDictionary.value = val;
    });
  },
  {
    immediate: true
  }
);

// msg
</script>
<template>
  <IonList v-if="msgs && nameDictionary">
    <template v-for="msg in msgs">
      <MessageCard :name-dict="nameDictionary" :msg="msg" />
    </template>
  </IonList>
</template>

<style scoped></style>
