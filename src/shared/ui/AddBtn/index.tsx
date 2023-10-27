import { FC } from "react";
import { IAddBtnProps } from "./types";

import { Btn } from "../Btn";
import { Image } from "../Image";

import addCircle from "./assets/add-circle.svg";

export const AddBtn: FC<IAddBtnProps> = ({ onClick }) => {
    return (
        <Btn
            color="#0064FA"
            width="48px"
            height="48px"
            padding="14px"
            onClick={onClick}
        >
            <Image src={addCircle} alt="add btn" width={20} height={20} />
        </Btn>
    );
};
