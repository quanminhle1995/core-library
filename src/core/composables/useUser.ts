import { reactive, ref } from "vue";
import type { IUser } from "../interface/IUser";
import type { IUserStore } from "../interface/IUserStore";

export function useUser() {
  const user = reactive<IUser>({
    id: '',
    username: '',
    email: ''
  });

  function setUser(u: IUser) {
      user.id = u.id;
      user.username = u.username;
      user.email = u.email;
  }

  return {
    user,
    setUser
  }
}