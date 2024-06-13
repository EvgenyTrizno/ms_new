import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IClinicRegistrationStoreProps {
    number: string;
    worktime: number;
    workdays: [] | string[];
    password: string;
    password2: string;
    setNumber: (number: string) => void;
    setWorktime: (worktime: number) => void;
    setWorkdays: (workdays: [] | string[]) => void;
    setPassword: (pass: string) => void;
    setPassword2: (pass: string) => void;
}

export const useClinicRegistration = create<IClinicRegistrationStoreProps>()(
    immer((set) => ({
        number: "",
        worktime: 0,
        workdays: [],
        password: "",
        password2: "",
        setNumber: (number: string) => {
            set((state) => {
                state.number = number;
            })
        },
        setWorktime: (worktime: number) => {
            set((state) => {
                state.worktime = worktime;
            })
        },
        setWorkdays: (workdays: [] | string[]) => {
            set((state) => {
                state.workdays = workdays;
                console.log(state.workdays)
            })
        },
        setPassword: (pass: string) => {
            set((state) => {
                state.password = pass;
            });
        },

        setPassword2: (pass: string) => {
            set((state) => {
                state.password2 = pass;
            });
        },

    }))
);
