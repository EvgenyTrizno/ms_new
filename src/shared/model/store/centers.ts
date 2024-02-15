import { ICenter } from "@/shared/types/centers.interface";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface InitialState {
  centers?: ICenter[];
  setCenters: (centers?: ICenter[]) => void;
}

export const useCenters = create<InitialState>()(
  immer((set) => ({
    center: undefined,

    setCenters: (centers?: ICenter[]) => {
      set((state) => {
        state.centers = centers;
      });
    },
  }))
);
