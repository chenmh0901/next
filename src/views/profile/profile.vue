<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="profile-avatar">
                <div style="width: 150px;height: 150px;">
                    <img src="../../../resources/icon.png" alt="">
                </div>
            </div>
            <div class="profile-info">
                <profile-form :user="user" />
            </div>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-title>是管理员吗？ {{ "isAdminUser" }}</ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonFooter, IonHeader } from '@ionic/vue';
import ProfileForm from './components/profile-form.vue';
import { User } from '@/types/user';
const user: User = {
    id: 123,
    no: "string",
    name: "string",
    admin: false,
    email: "string",
    wechat: "string",
    QQ: "string",
    phone: "string",
    class: "string",
    room: "string",
    birthPlace: "string",
    resume: "string"
};
</script>

<style coped>
.profile-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    height: 200px;
}

.profile-info {
    display: flex;
    justify-content: center;
    height: 600px;
}
</style>