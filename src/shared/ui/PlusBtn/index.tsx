
import { FC } from "react";
import { IPlusBtnProps } from "./types";

import { Btn } from "../Btn";
import { Row } from "../Row";
import { Image } from "../Image";

import { PropsWithClassName } from "@/shared/types";

export const PlusBtn: FC<PropsWithClassName<IPlusBtnProps>> = ({
    className,
    onClick,
    type = "small",
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
                        <Image src="/assets/plus.svg" alt="controller" width={20} height={20} />
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
                    <Row gap={10}>
                        <Image src="/assets/plus.svg" alt="controller" width={16} height={16} />
                    </Row>
                </Btn>
            )}
        </>
    );
};
