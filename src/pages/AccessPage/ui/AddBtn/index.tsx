import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import icon from "./assets/add-icon.svg";

export const AddBtn: FC = () => {
    return <Image src={icon} alt="" />;
};
