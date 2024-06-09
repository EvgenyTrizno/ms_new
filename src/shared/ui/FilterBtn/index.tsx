import { FC } from "react";
import { IFilterBtnProps } from "./types";

import { Btn } from "../Btn";
import { Row } from "../Row";
import { Image } from "../Image";

import controller from "./assets/controller.svg";
import close from "./assets/close.svg";
import { PropsWithClassName } from "@/shared/types";

export const FilterBtn: FC<PropsWithClassName<IFilterBtnProps>> = ({
    className,
    onClick,
    type = "big",
    isActive,
}) => {
    return (
        <>
            {type === "big" ? (
                <Btn
                    className={className}
                    color="#0064FA"
                    width="133px"
                    minW="133px"
                    onClick={onClick}
                    padding="14px 18px"
                    br="12px"
                >
                    <Row gap={10}>
                        <Image src={controller} alt="controller" width={20} height={20} />
                        Фильтры
                    </Row>
                </Btn>
            ) : (
                <Btn
                    className={className}
                    color="#0064FA"
                    width="34px"
                    minW="34px"
                    height="34px"
                    onClick={onClick}
                    padding="8px"
                    br="8px"
                >
                    <Row style={{ justifyContent: "center" }} gap={10}>
                        <Image
                            src={isActive ? close : controller}
                            alt="controller"
                            width={16}
                            height={16}
                        />
                    </Row>
                </Btn>
            )}
        </>
    );
};
