import { FC } from "react";
import { IFilterBtnProps } from "./types";

import { Btn } from "../Btn";
import { Row } from "../Row";
import { Image } from "../Image";

import controller from "./assets/controller.svg";

export const FilterBtn: FC<IFilterBtnProps> = ({ onClick }) => {
    return (
        <Btn
            color="#0064FA"
            width="133px"
            onClick={onClick}
            padding="14px 18px"
            br="12px"
        >
            <Row gap={10}>
                <Image
                    src={controller}
                    alt="controller"
                    width={20}
                    height={20}
                />
                Фильтры
            </Row>
        </Btn>
    );
};
