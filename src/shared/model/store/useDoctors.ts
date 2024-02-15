import { Doctor } from "@/shared/types";
import { create } from "zustand"
import { immer } from "zustand/middleware/immer";

interface InitialState {
  doctors?: Doctor[];
  setDoctors: (doctors?: Doctor[]) => void;
}

export const useDoctors = create<InitialState>()(
  immer((set) => ({
    doctors: undefined,
    setDoctors: (doctors?: Doctor[]) => {
      set((state) => {
        state.doctors = doctors;
      });
    },
  }))
);
