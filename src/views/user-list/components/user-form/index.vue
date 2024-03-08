<script setup lang="ts">
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import { User } from '@/types/user';
import UserForm from '@components/user-form/user-form.vue';
import { nextTick, ref, watch } from 'vue';

interface IProps {
  user: User;
  isAdmin: boolean;
  wrapperType?: string;
}
defineProps<IProps>();
const isOpen = ref();
const adjustPopoverPosition = async () => {
  await nextTick(); // 确保 DOM 更新完毕

  // 调整 Popover 位置
  const popover = document.querySelector('.popover-content');
  const contentRect = document
    .querySelector('.content')
    ?.getBoundingClientRect();
  if (!contentRect) return;
  let newTop = contentRect.height + contentRect.top;
  if (newTop + popover.offsetHeight > window.innerHeight) {
    newTop = window.innerHeight - popover.offsetHeight;
    // }
    console.log('1', popover);
    console.log('2', contentRect);
    popover.style.top = `${newTop}px`;
  }
};
// 在下拉框状态改变时调整 Popover 位置
watch(isOpen, adjustPopoverPosition, { immediate: true });
</script>

<template>
  <div class="content">
    <UserForm :user="user" :is-admin="!isAdmin" />
    <IonAccordionGroup v-if="isAdmin">
      <IonAccordion v-model="isOpen">
        <IonItem slot="header" color="light">
          <IonLabel>隐私信息</IonLabel>
        </IonItem>
        <UserForm
          slot="content"
          :user="user"
          :wrapper-type="wrapperType"
          :is-admin="isAdmin"
        />
      </IonAccordion>
    </IonAccordionGroup>
  </div>
</template>

<style scoped></style>
