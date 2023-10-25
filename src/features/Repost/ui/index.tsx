import { FC } from "react";

import { GrayBtn } from "@/shared/ui/GrayBtn";

import send from "../assets/send.svg";

export const Repost: FC = () => {
    return (
        <GrayBtn onClick={() => console.log("repost")}>
            <img src={send} alt="" />
        </GrayBtn>
    );
};
