import { FC } from "react";
import { useNavigate } from "react-router";

import arrow from "/assets/arrow-left-black.svg";

export const BackArrow: FC = () => {
    const navigate = useNavigate();

    return <img src={arrow} alt="" onClick={() => navigate(-1)} />;
};
