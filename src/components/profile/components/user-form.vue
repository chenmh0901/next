<script lang="ts" setup>
import { IonList } from '@ionic/vue';
import { PROFILE_FIELDS, ProfileFieldType } from '@/components/profile/type';
import { User } from '@/types/user';
import { ref } from 'vue';
import UserFormItem from '@/components/profile/components/user-form-item.vue';

enum UserFormMode {
  EDIT = 'EDIT',
  VIEW = 'VIEW'
}

interface IProps {
  user: User;
  mode: UserFormMode;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update', val?: User): void;
}>();

const form = ref(props.user);

const onSave = () => {
  try {
    // await send patch message -> server
    emit('update');
  } catch (e) {
    // error
  }
};
</script>

<template>
  <IonList v-if="user" class="w-full">
    <UserFormItem
      v-for="field in PROFILE_FIELDS"
      :key="field.key"
      :mode="mode"
      :type="field.type ?? ProfileFieldType.DEFAULT_TEXT"
      :label="field.label"
      :value="form[field.key]"
    />
    <ion-button color="primary" expand="block" @click="onSave"
      >保存
    </ion-button>
  </IonList>
</template>

<style scoped></style>
