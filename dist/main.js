import { ref, reactive } from 'vue';
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
  const user = reactive({
    id: "",
    username: "",
    email: ""
  });
  function setUser(u) {
    user.id = u.id;
    user.username = u.username;
    user.email = u.email;
  }
  return {
    user,
    setUser
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

export { createUserStore, useAxios$1 as useAxios, useGames, useUser };
//# sourceMappingURL=main.js.map
