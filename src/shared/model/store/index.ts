import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { IDiseasesStore, IMenuStore, TIsSelect } from "./types";

export const useDiseases = create<IDiseasesStore>()(
    immer((set) => ({
        diseases: [],
        setDiseases: (arg: string) =>
            set((state) => {
                state.diseases.push(arg);
            }),
    }))
);

export const useMenu = create<IMenuStore>()(
    immer((set) => ({
        isSelect: "Создать событие",
        setIsSelect: (arg: TIsSelect) => {
            set((state) => {
                state.isSelect = arg;
            });
        },
    }))
);
