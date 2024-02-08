import { IUserData } from "@/shared/types/user.types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IChatHeaderProps {
    call: ReactNode;
    actions: ReactNode;
    openInfo: Dispatch<SetStateAction<boolean>>;
    status: boolean;
    user: IUserData | null;
}
