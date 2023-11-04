import { Dispatch, SetStateAction } from "react";

export interface IListProps {
    search: string;
    setDisease: Dispatch<SetStateAction<number[]>>;
}
