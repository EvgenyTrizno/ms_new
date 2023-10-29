import { FC, useState } from "react";
import { TypeOfSelectedMethod } from "./types";

import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const SelectMethodOfRecovery: FC = () => {
    const [isSelect, setIsSelect] = useState<TypeOfSelectedMethod>();

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
