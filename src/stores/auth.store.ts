import {defineStore} from "pinia";
import {ref} from "vue";
import {User} from "@/types/user";
import {Storage} from "@ionic/storage";

const storage = new Storage();
await storage.create();

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>()

  const getToken = () => {
    return storage.get('token')
  }
  const setToken = (t: string) => {
    storage.set('token', t)
  }

  const setUser = (u: any) => {
    user.value = u
  }

  return {
    user,
    getToken,
    setToken,
    setUser,
  }
})