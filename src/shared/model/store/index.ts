import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { IMenuStore, TIsSelect } from "./types";

export const useMenu = create<IMenuStore>()(
    immer((set) => ({
        isSelect: "Главная" as TIsSelect,
        setIsSelect: (arg: TIsSelect | string) => {
            set((state) => {
                state.isSelect = arg;
            });
        },
    }))
);
