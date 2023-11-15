import { ICondition } from "../../types/condition.interface";

export interface ISickProps extends ICondition {
    onClick: () => void;
}
