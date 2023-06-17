'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const vue = require('vue');
const axios = require('axios');

function useGames() {
  const games = vue.ref(null);
  const error = vue.ref(null);
  return {
    games,
    error
  };
}

function useUser() {
  const user = vue.reactive({
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
  const configAxios = vue.ref();
  function setConfigAxios(config) {
    configAxios.value = config;
  }
  async function login() {
    const { data } = await useAxios("", configAxios);
    setUser(data);
  }
  const user = vue.ref({
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
  const isLoging = vue.ref(false);
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

exports.createUserStore = createUserStore;
exports.useAxios = useAxios$1;
exports.useGames = useGames;
exports.useUser = useUser;
//# sourceMappingURL=main.cjs.map
