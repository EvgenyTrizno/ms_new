import { FC } from "react";

import { BlueBox } from "../BlueBox/BlueBox";
import { Text } from "@/shared";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";

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
                                padding: "12px 16px",
                                gridGap: 10,
                                marginTop: 5,
                            }}
                        >
                            <Text type="h2" fz={LAPTOP ? "26px" : "28px"}>
                                $
                            </Text>
                            <Text type="p" fz="20px">
                                {item.sum.toLocaleString("en-US")}
                            </Text>
                        </BlueBox>
                    </div>
                ))}
            </div>
        </WhiteContentBlock>
    );
};
