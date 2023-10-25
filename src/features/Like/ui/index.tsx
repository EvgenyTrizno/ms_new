import { FC } from "react";

import { GrayBtn } from "@/shared/ui/GrayBtn";

import like from "../assets/like.svg";

export const Like: FC = () => {
    return (
        <GrayBtn onClick={() => console.log("like")}>
            <img src={like} alt="" />
        </GrayBtn>
    );
};
