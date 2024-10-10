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
import { onMounted, ref } from 'vue';
import { toast } from '@/utils/toast';
import { MessageType } from '@/views/board/components/type';
import { IHttpOptions, useHttp } from '@/utils/http';
import { useAlert } from '@/composables/use-alert';
import { User } from '@/types/user';
import { useModal } from '@/composables/use-modal';
import DatePicker from '@/components/date-picker/index.vue';
import { format } from 'date-fns';

const form = ref<MessageType>({} as MessageType);
const no = ref();
//onClick open alert
const { userChoice, alert } = useAlert({
  header: '发布提示',
  message: '确定发布吗？'
});
const onClick = async () => {
  if (form.value) {
    if (!form.value.content) {
      await toast('内容不能为空');
      return;
    }
    await alert();
    if (userChoice.value) {
      await publish();
    }
  }
};
//publish message
const publish = async () => {
  if (user.value && form.value) {
    form.value.userId = user.value.id;
    const option: IHttpOptions<MessageType> = {
      path: 'message/',
      method: 'post',
      data: form.value
    };
    try {
      console.log('form', form.value);
      await useHttp(option);
      await toast('发布成功');
      await modalController.dismiss(true);
    } catch (e) {
      await toast('发布失败');
    }
  }
};
const close = () => {
  modalController.dismiss(false);
};

//fetch author no by token
const user = ref<User>();
const fetchUserByToken = async () => {
  const option: IHttpOptions<any> = {
    path: 'user/me',
    method: 'get'
  };
  return await useHttp<User>(option);
};
const fetchAuthorNo = async () => {
  const { data } = await fetchUserByToken();
  user.value = data;
  no.value = user.value.no;
};
onMounted(fetchAuthorNo);

const getNowDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  form.value.time = `${year}-${month}-${day}`;
  return `${year}-${month}-${day}`;
};

// get time
const datePicker = useModal();
const datePicked = ref(getNowDate());
const OpenDatePicker = async () => {
  const data = await datePicker.open({
    component: DatePicker,
    cssClass: 'datepicker'
  });
  if (data) {
    datePicked.value = format(data.value, 'yyyy-MM-dd');
    form.value.time = datePicked.value;
  }
};
</script>

<template>
  <div class="message__form">
    <div class="header">
      <h1>发布通知</h1>
    </div>
    <div class="content">
      <IonList>
        <IonItem lines="none" class="mb-2">
          <IonLabel class="w-1/5">发布者</IonLabel>
          <IonInput
            :value="no"
            class="border border-grey-300 rounded-lg text-center w-4/5"
            disabled
          ></IonInput>
        </IonItem>
        <IonItem lines="none" class="mb-2">
          <IonLabel class="w-1/5">发布时间</IonLabel>
          <IonInput
            :value="datePicked || form?.time"
            @click="OpenDatePicker"
            class="border border-grey-300 rounded-lg text-center w-4/5"
          ></IonInput>
        </IonItem>
        <IonItem lines="none" class="mb-2">
          <IonLabel class="w-1/5">标题</IonLabel>
          <IonInput
            placeholder="请输入标题"
            :value="form?.title"
            @ion-change="form.title = $event.detail.value"
            class="border border-grey-300 rounded-lg text-center w-4/5"
          ></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonLabel class="w-1/5">内容</IonLabel>
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
      <IonButtons class="flex justify-around mt-auto mb-6">
        <IonButton class="w-1/3" color="light" @click="close">关闭</IonButton>
        <IonButton class="w-1/3" @click="onClick">发布</IonButton>
      </IonButtons>
    </div>
  </div>
</template>

<style scoped>
.message__form {
  @apply flex flex-col items-center h-full py-12;
}

.header {
  @apply h-20 text-2xl flex flex-col items-center justify-center;
}

.content {
  @apply w-full h-full flex flex-col;
}
</style>
