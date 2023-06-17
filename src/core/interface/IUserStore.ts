import type { Ref } from "vue";
import type { IUser } from "./IUser";

export interface IUserStore {
  user: Ref<IUser>;
  setUser: Function
}
