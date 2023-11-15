import { SetStateAction, Dispatch } from "react";

import { TFilter } from "@/entities/SearchResultsList";

export interface IWithFilterProps {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    search: string;
}

export interface IFilterObj {
    [K: string]: TFilter;
}
