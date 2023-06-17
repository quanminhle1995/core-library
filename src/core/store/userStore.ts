import { reactive, ref } from "vue";
import type { IUser } from "../interface/IUser";
import type { IUserStore } from "../interface/IUserStore";
import axios, { type AxiosRequestConfig } from "axios"

export function createUserStore() {

  const configAxios = ref();
  function setConfigAxios(config: any) {
    configAxios.value = config;
  }
  async function login() {
   const { data } = await useAxios("", configAxios);
   setUser(data);
  }
  const user = ref<IUser>({
    id: '',
    username: '',
    email: ''
  });
  function setUser(u: IUser) {
     user.value = u;
  }
  return {
    user,
    setUser,
    login,
    setConfigAxios
  }
}

async function useAxios(url: string, option?: any) {
  const isLoging = ref(false);
 
  const {data, status, statusText, request, headers } = await axios.get('', option);
  isLoging.value = true;

  return {
    data,
    status,
    statusText,
    request,
    headers
  }
}