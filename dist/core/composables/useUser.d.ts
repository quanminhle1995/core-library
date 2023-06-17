import type { IUser } from "../interface/IUser";
export declare function useUser(): {
    user: {
        id: string;
        username: string;
        email: string;
    };
    setUser: (u: IUser) => void;
};
