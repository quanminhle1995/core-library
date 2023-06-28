import { AuthService, type IAuthService } from "./services/authService";
import { AxiosService, type IAxiosService } from "./services/axiosService";

export interface IContext {
  authService: IAuthService,
  axiosService: IAxiosService
}

export function useContext(): IContext {
  const authService = AuthService();
  const { getToken } = authService;
  
  const axiosService = AxiosService(getToken());

  return {
    authService: authService,
    axiosService: axiosService
  };
}
