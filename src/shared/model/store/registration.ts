import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IRegistrationStoreProps {
  email: string;
  password: string;
  number: string;
  setEmail: (email: string) => void;
  setPassword: (pass: string) => void;
  setNumber: (number: string) => void;
}

export const useRegistration = create<IRegistrationStoreProps>()(
  immer((set) => ({
    email: "",
    password: "",
    number: "",
    setEmail: (email: string) => {
      set((state) => {
        state.email = email;
      });
    },
    setPassword: (pass: string) => {
      set((state) => {
        state.password = pass;
      });
    },
    setNumber: (number: string) => {
      set((state) => {
        state.number = number;
      })
    }
  }))
);
