import { Dispatch, SetStateAction } from "react";

export interface IDisease {
    disease: string;
    setDisease: Dispatch<SetStateAction<number[]>>;
    diseaseId: number;
}
