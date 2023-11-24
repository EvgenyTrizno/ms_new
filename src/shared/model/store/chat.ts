import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { IUserData } from "@/shared/types/user.interface";

interface IChat {
    chat_id: number;
    user: IUserData | null;
    setChatId: (id: number) => void;
    setUser: (user: IUserData) => void;
}

export const useChat = create<IChat>()(
    immer((set) => ({
        chat_id: 0,
        user: null,
        setChatId: (id: number) => {
            set((state) => {
                state.chat_id = id;
            });
        },
        setUser: (user: IUserData) => {
            set((state) => {
                state.user = user;
            });
        },
    }))
);
