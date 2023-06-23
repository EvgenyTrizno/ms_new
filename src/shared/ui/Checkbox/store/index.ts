import { create } from "zustand";

interface IUseCheckbox {
    value: string;
    setValue: (arg: string) => void;
}

export const useCheckbox = create<IUseCheckbox>()((set) => ({
    value: "",
    setValue: (value: string) => set({ value: value }),
}));
