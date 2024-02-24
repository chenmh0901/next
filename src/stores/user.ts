import { UserPhoto } from '@/types/user';

export const useUserStore = () => {
  let photo: UserPhoto = { filepath: '' };
  const setPhoto = (p: UserPhoto) => {
    photo = p;
  };
  const getPhoto = () => {
    return photo;
  };

  return { setPhoto, getPhoto };
};
