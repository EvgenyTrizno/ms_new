import { TCondition } from "@/shared/types/condition.type";
import { Dispatch, SetStateAction } from "react";

export interface ISetConditionPropos {
    setCondition: Dispatch<SetStateAction<TCondition>>;
    condition: string;
}
