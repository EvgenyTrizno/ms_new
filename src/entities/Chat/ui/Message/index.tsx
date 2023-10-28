import { FC } from "react";
import { IMessageProps } from "./types";

import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const Message: FC<IMessageProps> = ({ type }) => {
    const generateMessage = () => {
        switch (type) {
            case "to":
                return (
                    <Row gap={10} style={{ justifyContent: "flex-end" }}>
                        <Avatar type="custom" size={40} img={""} />
                        <Rows gap={3} rows={["auto"]}>
                            <Text type="p" color="#3C3D3E" fz="11px">
                                Виктор
                            </Text>
                            <Row gap={5}>
                                <div className={`${styles.text} ${styles.to}`}>
                                    Привет. Я готов к чему-то
                                </div>
                            </Row>
                            <Text
                                type="p"
                                fz="10px"
                                color="#7D7F82"
                                position="end"
                            >
                                8:00 PM
                            </Text>
                        </Rows>
                    </Row>
                );
                break;
            case "from":
                return (
                    <Row gap={10}>
                        <Avatar type="custom" size={40} img={""} />
                        <Rows gap={3} rows={["auto"]}>
                            <Text type="p" color="#3C3D3E" fz="11px">
                                Виктор
                            </Text>
                            <Row gap={5}>
                                <div
                                    className={`${styles.text} ${styles.from}`}
                                >
                                    Привет. Я готов к чему-то
                                </div>
                            </Row>
                            <Text
                                type="p"
                                fz="10px"
                                color="#7D7F82"
                                position="end"
                            >
                                8:00 PM
                            </Text>
                        </Rows>
                    </Row>
                );
        }
    };

    const msg = generateMessage();

    return <>{msg}</>;
};
