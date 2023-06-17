import type { IUser } from "../interface/IUser";
export declare function createUserStore(): {
    user: import("vue").Ref<{
        id: string;
        username: string;
        email: string;
    }>;
    setUser: (u: IUser) => void;
    login: () => Promise<void>;
    setConfigAxios: (config: any) => void;
};
