import { ClinicResTypes } from "@/shared/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface InitialState {
  currentClinic?: ClinicResTypes;

  setCurrentClinic: (clinic?: ClinicResTypes) => void;
}

export const useClinic = create<InitialState>()(
  immer((set) => ({
    currentClinic: undefined,

    setCurrentClinic: (clinic?: ClinicResTypes) => {
      set((state) => {
        state.currentClinic = clinic;
      });
    },
  }))
);
