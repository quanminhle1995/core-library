import type { IUser } from "../interface/IUser";
export declare function useUser(): {
    user: {
        id: string;
        username: string;
        email: string;
    };
    setUser: (u: IUser) => void;
    userModel: {
        get: () => {
            id: string;
            username: string;
            email: string;
        };
        set: (value: any) => void;
    };
};
