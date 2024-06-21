import { IUser } from "@/shared/types/user.types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IAuthStore {
    isAuth: boolean;
    user: null | IUser;
    setIsAuth: (bol: boolean) => void;
    setUser: (user: null | IUser) => void;
}

export const useAuth = create<IAuthStore>()(
    immer((set) => ({
        isAuth: false,
        user: null,
        setIsAuth: (bol: boolean) => {
            set((state) => {
                state.isAuth = bol;
            });
        },
        setUser: (user: IUser | null) => {
            set((state) => {
                state.user = user;
            });
        },
    }))
);




