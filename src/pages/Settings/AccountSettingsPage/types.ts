import { IProfileParamsItemsData } from "@/pages/Profile/types";

type TParams = Omit<IProfileParamsItemsData, "content">;

interface IOtherData extends TParams {
    navigate: string;
}

interface IMainData {
    id: string;
    placeholder: string;
}

export interface IAccountData {
    main: IMainData[];
    other: IOtherData[];
}
