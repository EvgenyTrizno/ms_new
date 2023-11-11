import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IRegistrationStoreProps {
    number: string;
    setNumber: (number: string) => void;
}

export const useRegistration = create<IRegistrationStoreProps>()(
    immer((set) => ({
        number: "",
        setNumber: (number: string) => {
            set((state) => {
                state.number = number;
            });
        },
    }))
);
