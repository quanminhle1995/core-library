export interface IAuthService {
  token: string,
  setToken: Function,
  getToken: () => string
}

export function AuthService(): IAuthService{
  let token = "";
  function setToken(tk: string) {
    token = tk;
  };

  const getToken = (): string =>  {
    return token;
  }
  return {
    token,
    setToken,
    getToken
  };
}