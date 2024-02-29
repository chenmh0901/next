import { pageTo } from '@/router/director';
import { useAuthStore } from '@/stores/auth';

const { removeToken } = useAuthStore();
export const logout = async () => {
  await removeToken();
  pageTo('signin');
};
