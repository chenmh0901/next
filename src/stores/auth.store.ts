import {defineStore} from "pinia";
import {ref} from "vue";
import {User} from "@/types/user";

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()
  const user = ref<User>()

  const setToken = (t: string) => {
    token.value = t
  }

  const setUser = (u: any) => {
    user.value = u
  }

  return {
    token,
    user,
    setToken,
    setUser,
  }
})