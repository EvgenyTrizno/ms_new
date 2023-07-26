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
    IIsProfile,
} from "./types";

export const useMenu = create<IMenuStore>()(
    immer((set) => ({
        isSelect: "Главная" as TIsSelect,
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
        setIsOpen: (arg: boolean) => {
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
        main_center: null,
        isAuth: false,
        disease_id: [],
        group: "Пользователи",
        number: "",
        pass1: "",
        pass2: "",
        position: {
            lat: 0,
            lng: 0,
            city: "",
            counrty: "",
        },
        setCenter: (centerId: number) => {
            set((state) => {
                state.main_center = centerId as number;
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
        setAuth: (bool: boolean) => {
            set((state) => {
                state.isAuth = bool;
            });
        },
        setPass1: (pass: string) => {
            set((state) => {
                state.pass1 = pass;
            });
        },
        setPass2: (pass: string) => {
            set((state) => {
                state.pass2 = pass;
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

export const useProfile = create<IIsProfile>()(
    immer((set) => ({
        isProfile: false,
        setIsProfile: (arg: boolean) =>
            set((state) => {
                state.isProfile = arg;
            }),
    }))
);
