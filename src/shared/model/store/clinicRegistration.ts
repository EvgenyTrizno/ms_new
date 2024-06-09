import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IClinicRegistrationStoreProps {
    number: string;
    worktime: Date;
    workdays: string;
    password: string;
    password2: string;
    setNumber: (number: string) => void;
    setWorktime: (worktime: Date) => void;
    setWorkdays: (workdays: string) => void;
    setPassword: (pass: string) => void;
    setPassword2: (pass: string) => void;
}

export const useClinicRegistration = create<IClinicRegistrationStoreProps>()(
    immer((set) => ({
        number: "",
        worktime: new Date(),
        workdays: "",
        password: "",
        password2: "",
        setNumber: (number: string) => {
            set((state) => {
                state.number = number;
            })
        },
        setWorktime: (worktime: Date) => {
            set((state) => {
                state.worktime = worktime;
            })
        },
        setWorkdays: (workdays: string) => {
            set((state) => {
                state.workdays = workdays;
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
