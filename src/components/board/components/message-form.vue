<script setup lang="ts">
import {
  modalController,
  IonInput,
  IonLabel,
  IonItem,
  IonTextarea,
  IonButton,
  IonList
} from '@ionic/vue';
import { ref } from 'vue';
import { toast } from '@/utils/toast';
import { MessageType } from '@/components/board/type';
import { IHttpOptions, useHttp } from '@/utils/http';

const form = ref<MessageType>({
  content: ''
});

const publish = async () => {
  const option: IHttpOptions<MessageType> = {
    path: 'message/',
    method: 'post',
    data: form.value
  };
  /**
   * @description: 删除发布者字段 （userId不能使用）
   */
  delete form.value.userId;
  await useHttp(option);
  await toast('发布成功');
  await modalController.dismiss();
};

const close = () => {
  modalController.dismiss();
};
</script>

<template>
  <div class="message__form">
    <div class="header">
      <h1>发布通知</h1>
    </div>
    <div class="content">
      <IonList class="p-0">
        <IonItem lines="none" class="my-4">
          <IonLabel class="w-1/5">发布者:</IonLabel>
          <IonInput
            :value="form?.userId"
            placeholder="请输入姓名"
            class="border border-grey-300 rounded-lg text-center w-4/5"
            @change="form.userId = $event.target.value"
          ></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonLabel class="w-1/5">内容:</IonLabel>
          <IonTextarea
            :value="form?.content"
            placeholder="请输入内容"
            class="border border-grey-300 rounded-lg text-center"
            fill="solid"
            auto-grow
            counter
            :maxlength="200"
            @change="form.content = $event.target.value"
          ></IonTextarea>
        </IonItem>
      </IonList>
      <IonButtons class="flex flex-row justify-around">
        <IonButton class="w-1/3" color="light" @click="close">关闭</IonButton>
        <IonButton class="w-1/3" @click="publish">发布</IonButton>
      </IonButtons>
    </div>
  </div>
</template>

<style scoped>
.message__form {
  @apply flex flex-col items-center;
}

.header {
  @apply h-20 text-2xl flex flex-col items-center justify-center;
}

.content {
  @apply w-full;
}
</style>
