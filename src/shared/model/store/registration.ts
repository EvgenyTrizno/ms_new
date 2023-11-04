import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IRegistrationStoreProps {
    birthday: string;
    password1: string;
    password2: string;
    number: string;
    setBirthday: (date: string) => void;
    setPassword1: (pass1: string) => void;
    setPassword2: (pass2: string) => void;
    setNumber: (number: string) => void;
}

export const useRegistration = create<IRegistrationStoreProps>()(
    immer((set) => ({
        birthday: "",
        password1: "",
        password2: "",
        number: "",
        setBirthday: (date: string) => {
            set((state) => {
                state.birthday = date;
            });
        },
        setPassword1: (pass1: string) => {
            set((state) => {
                state.password1 = pass1;
            });
        },
        setPassword2: (pass2: string) => {
            set((state) => {
                state.password2 = pass2;
            });
        },
        setNumber: (number: string) => {
            set((state) => {
                state.number = number;
            });
        },
    }))
);
