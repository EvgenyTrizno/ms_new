import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IExtracallStore {
    isOpen: boolean;
    setIsOpen: (bol: boolean) => void;
}

export const useExtracall = create<IExtracallStore>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (bol: boolean) => {
            set((state) => {
                state.isOpen = bol;
            });
        },
    }))
);
