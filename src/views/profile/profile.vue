<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="profile-avatar">
                <div style="width: 150px;height: 150px;background-color: red;">123</div>
            </div>
            <div class="profile-info">
                <detail-show :user="user" />
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
import DetailShow from '@/components/detail/detail-show.vue';
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
    align-items: center;
    height: 600px;
}
</style>