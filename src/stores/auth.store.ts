import {defineStore} from "pinia";
import {ref} from "vue";
import {User} from "@/types/user";
import {Storage} from "@ionic/storage";


export const useAuthStore = defineStore('auth', () => {
  const storage = new Storage();
  storage.create().then(async () => {
    token.value = await storage.get('token')
  });

  const token = ref<string>()
  const user = ref<User>()

  const getToken = () => {
    return token
  }
  const setToken = (t: string) => {
    token.value = t
    storage.set('token', t)
  }

  const setUser = (u: any) => {
    user.value = u
  }

  return {
    token,
    user,
    getToken,
    setToken,
    setUser,
  }
})