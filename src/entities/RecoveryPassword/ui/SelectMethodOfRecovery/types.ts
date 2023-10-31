import { Dispatch, SetStateAction } from "react";

export type TypeOfSelectedMethod = "tel" | "email";

export interface ISelectMethodOfRecoveryProps {
    isSelect: TypeOfSelectedMethod;
    setIsSelect: Dispatch<SetStateAction<TypeOfSelectedMethod>>;
}
