import { ReactNode } from "react";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

interface ICountryStoreProps {
    countryName: string;
    countrySvg: ReactNode | undefined;
    setCountrySvg: (svg: ReactNode | undefined) => void;
    setCountryName: (name: string) => void;
}

export const useCountryStore = create<ICountryStoreProps>()(
    immer((set) => ({
        countryName: "",
        countrySvg: undefined,
        setCountryName: (name: string) => {
            set((state) => {
                state.countryName = name;
            });
        },
        setCountrySvg: (svg: ReactNode | undefined) => {
            set((state) => {
                state.countrySvg = svg as ReactNode;
            });
        },
    }))
);
