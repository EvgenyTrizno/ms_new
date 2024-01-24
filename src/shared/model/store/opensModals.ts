import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IOpensModalsStore {
  isOpenMoreDetailed: boolean;

  setOpenMoreDetailed: (bol: boolean) => void;
}

export const useOpensModals = create<IOpensModalsStore>()(
  immer((set) => ({
    isOpenMoreDetailed: false,

    setOpenMoreDetailed: (bol: boolean) => {
      set((state) => {
        state.isOpenMoreDetailed = bol;
      });
    },
  }))
);
