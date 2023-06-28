import type { IUser } from "../interface/IUser";


export function useUser() {
  const user = {
    id: '0',
    username: '',
    email: ''
  }


  const userModel = {
    get: () => {
      return user;
    },
    set: (value: any) => {
      user.id = value.id;
      user.username = value.username;
      user.email = value.email;
    }
  }

  function setUser(u: IUser) {
      user.id = u.id;
      user.username = u.username;
      user.email = u.email;
      userModel.set(u);
  }

  return {
    user,
    setUser,
    userModel,
  }
} 