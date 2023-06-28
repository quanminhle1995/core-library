export interface IAxiosService {
    get: () => void;
}
export declare const AxiosService: (accessToken: string) => IAxiosService;
