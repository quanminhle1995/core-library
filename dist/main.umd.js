(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.core = {}, global.Vue, global.axios));
})(this, (function (exports, vue, axios) { 'use strict';

  function useGames() {
    const games = vue.ref(null);
    const error = vue.ref(null);
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

  exports.createUserStore = createUserStore;
  exports.useAxios = useAxios$1;
  exports.useContext = useContext;
  exports.useGames = useGames;
  exports.useUser = useUser;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=main.umd.js.map
