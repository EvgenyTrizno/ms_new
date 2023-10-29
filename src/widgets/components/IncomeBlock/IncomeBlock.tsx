import { FC } from "react";

import { BlueBox } from "../../../shared/ui/BlueBox";
import { Text } from "@/shared/ui/Text";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";
import { WhiteContentBlock } from "../../../shared/ui/WhiteContentBlock";

import styles from "./IncomeBlock.module.scss";

interface IData {
    title: string;
    sum: number;
}

interface IIncomeBlockProps {
    title: string;
    data: IData[];
}

export const IncomeBlock: FC<IIncomeBlockProps> = ({ title, data }) => {
    return (
        <WhiteContentBlock>
            <Text
                type="h2"
                fz={LAPTOP ? "17px" : SMALL_LAPTOP ? "15px" : "18px"}
            >
                {title}
            </Text>
            <div className={styles.bal}>
                {data.map((item, i) => (
                    <div className={styles.sum} key={i}>
                        <Text type="p" fz={LAPTOP ? "14px" : ""}>
                            {item.title}
                        </Text>
                        <BlueBox
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                padding: LAPTOP
                                    ? "10px 14px"
                                    : SMALL_LAPTOP
                                    ? "10px 12px"
                                    : "12px 16px",
                                gridGap: 10,
                                marginTop: 5,
                            }}
                        >
                            <Text
                                type="h2"
                                fz={
                                    LAPTOP
                                        ? "26px"
                                        : SMALL_LAPTOP
                                        ? "24px"
                                        : "28px"
                                }
                            >
                                $
                            </Text>
                            <Text type="p" fz={SMALL_LAPTOP ? "15px" : "20px"}>
                                {item.sum.toLocaleString("en-US")}
                            </Text>
                        </BlueBox>
                    </div>
                ))}
            </div>
        </WhiteContentBlock>
    );
};
