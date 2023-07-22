import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import {
    IMenuStore,
    TIsSelect,
    IFilterStore,
    IExtraCall,
    IUserCondition,
    TUserConditionStatus,
    INotificationStore,
    IUserData,
    TGroups,
} from "./types";

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

export const useNotification = create<INotificationStore>()(
    immer((set) => ({
        isNotification: false,
        setIsNotification: (bool: boolean) => {
            set((state) => {
                state.isNotification = bool;
            });
        },
    }))
);

export const useUserData = create<IUserData>()(
    immer((set) => ({
        center_id: [],
        disease_id: [],
        group: "Пользователи",
        number: "",
        position: {
            lat: 0,
            lng: 0,
            city: "",
            counrty: "",
        },
        setCenter: (centerId: number) => {
            set((state) => {
                state.center_id.push(centerId);
            });
        },
        setDiseases: (diseaseId: number) => {
            set((state) => {
                state.disease_id.push(diseaseId);
            });
        },
        setGroup: (group: TGroups) => {
            set((state) => {
                state.group = group;
            });
        },
        setNumber: (phone: string) => {
            set((state) => {
                state.number = phone;
            });
        },
        setPosition: (
            lat: number,
            lng: number,
            city: string,
            counrty: string
        ) => {
            set((state) => {
                (state.position.lat = lat),
                    (state.position.lng = lng),
                    (state.position.city = city),
                    (state.position.counrty = counrty);
            });
        },
    }))
);
