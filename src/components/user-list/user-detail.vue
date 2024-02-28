<script setup lang="ts">
import { IonItem } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

interface IProps {
  user: User;
  isAdmin: boolean;
}

const props = defineProps<IProps>();
const user = computed(() => {
  const u = { ...props.user } as any;
  const keys = Object.keys(u) as Array<keyof User>;
  keys.forEach((k) => {
    if (!u[k]) u[k] = '未填写';
  });
  return u as User;
});
</script>

<template>
  <div v-if="user" class="user__detail">
    <IonItem>
      <Icon icon="material-symbols:person-outline" />
      姓名: {{ user?.name }}
    </IonItem>
    <IonItem>
      <Icon icon="ic:outline-class" />
      班级: {{ user?.className }}
    </IonItem>
    <IonItem>
      <Icon icon="cil:room" />
      寝室: {{ user?.roomName }}
    </IonItem>
    <IonItem>
      <Icon icon="tdesign:address-book" />
      籍贯: {{ user?.birthPlace }}
    </IonItem>
    <IonItem>
      <Icon icon="tabler:phone-call" />
      手机号: {{ user?.phone }}
    </IonItem>
    <IonItem>
      <Icon icon="mingcute:wechat-line" />
      微信: {{ user?.wechat }}
    </IonItem>
    <IonItem>
      <Icon icon="ri:qq-line" />
      QQ: {{ user?.qq }}
    </IonItem>
    <IonItem>
      <Icon icon="mdi:comment-outline" />
      简介: {{ user?.selfResume }}
    </IonItem>
    <template v-if="isAdmin">
      <IonItem>
        <Icon icon="mdi:address-marker-outline" />
        地址: {{ user?.address }}
      </IonItem>
      <IonItem>
        <Icon icon="icon-park-outline:comment" />
        留言: {{ user?.adminResume }}
      </IonItem>
    </template>
  </div>
</template>

<style scoped>
.user__detail {
  @apply flex flex-col;
}
</style>
