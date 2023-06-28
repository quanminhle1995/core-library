import { ref } from 'vue';
import axios from 'axios';

function useGames() {
  const games = ref(null);
  const error = ref(null);
  return {
    games,
    error
  };
}

function useUser() {
  const user = {
    id: "0",
    username: "",
    email: ""
  };
  const userModel = {
    get: () => {
      return user;
    },
    set: (value) => {
      user.id = value.id;
      user.username = value.username;
      user.email = value.email;
    }
  };
  function setUser(u) {
    user.id = u.id;
    user.username = u.username;
    user.email = u.email;
    userModel.set(u);
  }
  return {
    user,
    setUser,
    userModel
  };
}

function useAxios$1() {
}

function createUserStore() {
  const configAxios = ref();
  function setConfigAxios(config) {
    configAxios.value = config;
  }
  async function login() {
    const { data } = await useAxios("", configAxios);
    setUser(data);
  }
  const user = ref({
    id: "",
    username: "",
    email: ""
  });
  function setUser(u) {
    user.value = u;
  }
  return {
    user,
    setUser,
    login,
    setConfigAxios
  };
}
async function useAxios(url, option) {
  const isLoging = ref(false);
  const { data, status, statusText, request, headers } = await axios.get("", option);
  isLoging.value = true;
  return {
    data,
    status,
    statusText,
    request,
    headers
  };
}

function AuthService() {
  let token = "";
  function setToken(tk) {
    token = tk;
  }
  const getToken = () => {
    return token;
  };
  return {
    token,
    setToken,
    getToken
  };
}

const AxiosService = (accessToken) => {
  const get = () => {
    console.log(accessToken);
  };
  return {
    get
  };
};

function useContext() {
  const authService = AuthService();
  const { getToken } = authService;
  const axiosService = AxiosService(getToken());
  return {
    authService,
    axiosService
  };
}

export { createUserStore, useAxios$1 as useAxios, useContext, useGames, useUser };
//# sourceMappingURL=main.es.js.map
