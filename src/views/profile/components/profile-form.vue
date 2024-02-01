<script setup lang="ts">
import { IonInput } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';
interface IProps {
    user: User;
}
const props = defineProps<IProps>();

const user = computed(() => {
    const u = { ...props.user } as any;
    const keys = Object.keys(u) as Array<keyof User>;
    keys.forEach((k) => {
        if (!u[k]) u[k] = '未填写';
    });
    return u;
});
</script>

<template>
    <div v-if="user">
        <ion-item>
            <ion-item>
                <label style="width:40%">姓名:</label>
                <ion-input :value="user.name" disabled style="width:60%"></ion-input>
            </ion-item>
            <ion-item>
                <label style="width:40%">性别:</label>
                <ion-input :value="user.sex" disabled style="width:60%"></ion-input>
            </ion-item>
        </ion-item>
        <ion-item>
            <ion-item>
                <label style="width:40%">班级:</label>
                <ion-input :value="user.class" disabled style="width:60%"></ion-input>
            </ion-item>
            <ion-item>
                <label style="width:40%">寝室:</label>
                <ion-input :value="user.room" disabled style="width:60%"></ion-input>
            </ion-item>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">学号:</label>
            <ion-input :value="user.no" disabled style="width: 80%;"></ion-input>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">生日:</label>
            <ion-input :value="user.birthday" disabled style="width: 80%;"></ion-input>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">籍贯:</label>
            <ion-input :value="user.birthPlace" disabled style="width: 80%;"></ion-input>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">手机:</label>
            <ion-input :value="user.phone" disabled style="width: 80%;"></ion-input>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">QQ:</label>
            <ion-input :value="user.QQ" disabled style="width: 80%;"></ion-input>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">邮箱:</label>
            <ion-input :value="user.email" disabled style="width: 80%;"></ion-input>
        </ion-item>
        <ion-item>
            <label style="margin-left:20px;width: 20%;">简介:</label>
            <ion-input :value="user.resume" disabled style="width: 80%;"></ion-input>
        </ion-item>
    </div>
</template>

<style scoped>
ion-input {
    border: solid 1px grey;
    border-radius: 10px;
    text-align: center;
}

ion-icon {
    margin-right: 10px;
}
</style>
