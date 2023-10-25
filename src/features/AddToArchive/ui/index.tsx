import { FC } from "react";

import { GrayBtn } from "@/shared/ui/GrayBtn";

import archive from "../assets/archive-add.svg";

export const AddToArchive: FC = () => {
    return (
        <GrayBtn onClick={() => console.log("archive")}>
            <img src={archive} alt="" />
        </GrayBtn>
    );
};
