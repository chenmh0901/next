<script lang="ts" setup>
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
import { User } from '@/types/user';
import { ref } from 'vue';
import {
  PROFILE_FIELDS,
  ProfileFieldType
} from '@/components/profile/components/profile-field';
import DialogModalDetail from '@/components/profile/components/dialog-modal-detail.vue';

interface IProps {
  user: User;
  formMode: FormMode;

  // @TODO 更好的解法
  toggle: () => void;
}

enum FormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'save'): void;
}>();

// shallowClone 浅拷贝
const form = ref(props.user);

const onSave = () => {
  props.toggle();

  // 有没有修改
  try {
    // await send patch message -> server
    emit('save');
  } catch (e) {
    // error
  }
};

// change函数是emit val是值 key是索引
const change = (val: any, key: string) => {
  form.value[key] = val;
};
</script>

<template>
  <ion-list v-if="user" class="w-full">
    <ion-item
      v-for="(item, key) in PROFILE_FIELDS"
      :key="key"
      class="my-4"
      lines="none"
    >
      <ion-label class="w-1/5">{{ item.label }}:</ion-label>
      <ion-input
        :disabled="formMode === FormMode.VIEW"
        :id="item.type"
        :value="form[item.key]"
        @change="
          (a) => {
            form[item.key] = a.target.value;
          }
        "
        class="border border-grey-300 rounded-lg text-center w-4/5"
      >
      </ion-input>
      <template v-if="item.type">
        <dialog-modal-detail
          :type="item.type"
          :KEY="item.key"
          :label="item.label"
          @change="change"
        ></dialog-modal-detail>
      </template>
    </ion-item>
    <ion-button
      v-if="formMode === FormMode.VIEW"
      color="primary"
      expand="block"
      @click="toggle"
      >编辑
    </ion-button>
    <ion-button v-else color="primary" expand="block" @click="onSave"
      >保存
    </ion-button>
  </ion-list>
</template>

<style scoped></style>
