<script setup lang="ts">
import MessageCard from '@/components/board/message-card.vue';
import { MessageType } from '@/components/board/type';
import { IHttpOptions, useHttp } from '@/utils/http';
import { User } from '@/types/user';
import { watch, ref } from 'vue';
import { Icon } from '@iconify/vue';
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

/**
 * msg.userId exist in nameDictionary
 *
 * nameDictionary?.[msg.userId]
 */
</script>
<template>
  <IonList v-if="msgs && nameDictionary">
    <MessageCard
      v-for="msg in msgs"
      :key="msg.userId"
      :name-dict="nameDictionary"
      :msg="msg"
    />
  </IonList>
  <div v-else class="loading-mask">
    <Icon class="text-[60px] mb-4" icon="line-md:loading-twotone-loop" />
    <div class="text-[20px]">正在加载...</div>
  </div>
</template>

<style scoped>
.loading-mask {
  @apply absolute flex flex-col justify-center w-full h-full top-0 bottom-0 items-center;
  background-color: rgba(121, 121, 121, 0.2);
}
</style>
