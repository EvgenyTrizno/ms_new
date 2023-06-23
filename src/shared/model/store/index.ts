import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { IDiseasesStore } from "./types";

export const useDiseases = create<IDiseasesStore>()(
    immer((set) => ({
        diseases: [],
        setDiseases: (arg: string) =>
            set((state) => {
                state.diseases.push(arg);
            }),
    }))
);
