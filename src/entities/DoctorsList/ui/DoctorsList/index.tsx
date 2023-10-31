import { FC } from "react";
import { IDoctorsListProps } from "./types";

import { Rows } from "@/shared/ui/Rows";

export const DoctorsList: FC<IDoctorsListProps> = ({ children }) => {
    return <Rows gap={}>{children}</Rows>;
};
