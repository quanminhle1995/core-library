export interface IAuthService {
    token: string;
    setToken: Function;
    getToken: () => string;
}
export declare function AuthService(): IAuthService;
