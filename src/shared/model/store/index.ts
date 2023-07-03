import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import {
    IDiseasesStore,
    IMenuStore,
    TIsSelect,
    IFilterStore,
    IExtraCall,
    IUserCondition,
    TUserConditionStatus,
} from "./types";

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

export const useFilter = create<IFilterStore>()(
    immer((set) => ({
        isFilter: "",
        setIsFilter: (arg) => {
            set((state) => {
                state.isFilter = arg;
            });
        },
    }))
);

export const useExtraCall = create<IExtraCall>()(
    immer((set) => ({
        isOpen: false,
        setIsOpen: (arg) => {
            set((state) => {
                state.isOpen = arg;
            });
        },
    }))
);

export const useUserCondition = create<IUserCondition>()(
    immer((set) => ({
        condition: "Здоров",
        setCondition: (arg: TUserConditionStatus) => {
            set((state) => {
                state.condition = arg;
            });
        },
    }))
);
