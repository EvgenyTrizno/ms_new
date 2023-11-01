import { FC } from "react";
import { IDoctorsListProps } from "./types";

import { Slider } from "@/widgets";

export const DoctorsList: FC<IDoctorsListProps> = ({ children }) => {
    return <Slider>{children}</Slider>;
};
