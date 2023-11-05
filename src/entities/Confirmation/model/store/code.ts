import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ICode {
    code: string;
    setCode: (code: string) => void;
}

export const useCode = create<ICode>()(
    immer((set) => ({
        code: "",
        setCode: (code: string) => {
            set((state) => {
                state.code = code;
            });
        },
    }))
);
