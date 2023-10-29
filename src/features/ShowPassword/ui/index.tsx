import { FC } from "react";
import { IShowPasswordProps } from "../types";

import { Image } from "@/shared/ui/Image";

import eyeClose from "../assets/eye-close.svg";
import eyeOpen from "../assets/eye-open.svg";

export const ShowPassword: FC<IShowPasswordProps> = ({ isShow, onClick }) => {
    return (
        <Image src={isShow ? eyeOpen : eyeClose} alt="eye" onClick={onClick} />
    );
};
