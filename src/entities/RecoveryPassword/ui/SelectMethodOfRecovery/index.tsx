import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { ISelectMethodOfRecoveryProps } from "./types";

export const SelectMethodOfRecovery: FC<ISelectMethodOfRecoveryProps> = ({
    isSelect,
    setIsSelect,
}) => {
    return (
        <Row gap={0} style={{ justifyContent: "center" }}>
            <div
                className={styles.item}
                onClick={() => setIsSelect("tel")}
                style={
                    isSelect === "tel" ? { borderBottomColor: "#262626" } : {}
                }
            >
                <Text type="p" fz="20px" color="#414141">
                    Тел. Номер
                </Text>
            </div>
            <div
                className={styles.item}
                style={
                    isSelect === "email" ? { borderBottomColor: "#262626" } : {}
                }
                onClick={() => setIsSelect("email")}
            >
                <Text type="p" fz="20px" color="#414141">
                    Эл. Почта
                </Text>
            </div>
        </Row>
    );
};
