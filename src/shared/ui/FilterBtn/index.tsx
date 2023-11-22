import { FC } from "react";
import { IFilterBtnProps } from "./types";

import { Btn } from "../Btn";
import { Row } from "../Row";
import { Image } from "../Image";

import controller from "./assets/controller.svg";
import close from "./assets/close.svg";

export const FilterBtn: FC<IFilterBtnProps> = ({
    onClick,
    type = "big",
    isActive,
}) => {
    return (
        <>
            {type === "big" ? (
                <Btn
                    color="#0064FA"
                    width="133px"
                    minW="133px"
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
            ) : (
                <Btn
                    color="#0064FA"
                    width="48px"
                    minW="48px"
                    height="48px"
                    onClick={onClick}
                    padding="14px"
                    br="12px"
                >
                    <Row gap={10}>
                        <Image
                            src={isActive ? close : controller}
                            alt="controller"
                            width={20}
                            height={20}
                        />
                    </Row>
                </Btn>
            )}
        </>
    );
};
