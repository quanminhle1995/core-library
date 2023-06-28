import { type IAuthService } from "./services/authService";
import { type IAxiosService } from "./services/axiosService";
export interface IContext {
    authService: IAuthService;
    axiosService: IAxiosService;
}
export declare function useContext(): IContext;
