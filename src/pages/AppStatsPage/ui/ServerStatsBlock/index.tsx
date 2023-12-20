import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { IServerStatsBlock } from "./types";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const ServerStatsBlock: FC<IServerStatsBlock> = ({
    /* maxSize, */ name,
}) => {
    return (
        <BlueBox>
            <Text type="h4" fz="18px" style={{ marginBottom: 12 }}>
                {name}
            </Text>
            <div className={styles.inner}>
                <div className={styles.bar} style={{ width: "20%" }}>
                    <Text type="h2" color="#fff" position="center" fz="24px">
                        85%
                    </Text>
                </div>
            </div>
            <Text type="h4" fz="18px" position="end" style={{ marginTop: 8 }}>
                64 ГБ
            </Text>
        </BlueBox>
    );
};
