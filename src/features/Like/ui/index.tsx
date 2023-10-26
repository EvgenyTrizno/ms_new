import { FC } from "react";

import { GrayBtn } from "@/shared/ui/GrayBtn";

import like from "../assets/heart.svg";

export const Like: FC = () => {
    return (
        <GrayBtn onClick={() => console.log("like")}>
            <img src={like} alt="" />
        </GrayBtn>
    );
};
