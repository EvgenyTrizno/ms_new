import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IRegistrationStoreProps {
  email: string;
  password: string;
  password2: string;
  setEmail: (email: string) => void;
  setPassword: (pass: string) => void;
  setPassword2: (pass: string) => void;
}

export const useRegistration = create<IRegistrationStoreProps>()(
  immer((set) => ({
    email: "",
    password: "",
    password2: "",
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

    setPassword2: (pass: string) => {
      set((state) => {
        state.password2 = pass;
      });
    },
  }))
);
