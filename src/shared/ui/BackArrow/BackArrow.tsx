import { FC } from "react";
import { useNavigate } from "react-router";

import { IBackArrow } from "@/shared/types";

import arrow from "/assets/arrow-left-black.svg";

export const BackArrow: FC<IBackArrow> = ({ path }) => {
    const navigate = useNavigate();

    return <img src={arrow} alt="" onClick={() => navigate(path)} />;
};
