import { FC } from "react";
import { IMessageProps } from "./types";

import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const Message: FC<IMessageProps> = ({
    type,
    onClick,
    text,
    img,
    name,
    hours,
    minutes,
}) => {
    const generateMessage = () => {
        switch (type) {
            case "to":
                return (
                    <Row gap={10} style={{ justifyContent: "flex-end" }}>
                        <Avatar type="custom" size={40} img={img} />
                        <Rows gap={3} rows={["auto"]}>
                            <Text type="p" color="#3C3D3E" fz="11px">
                                {name}
                            </Text>
                            <Row gap={5} onClick={onClick}>
                                <div className={`${styles.text} ${styles.to}`}>
                                    {text}
                                </div>
                            </Row>
                            <Text
                                type="p"
                                fz="10px"
                                color="#7D7F82"
                                position="end"
                            >
                                {`${hours}:${minutes}`}
                            </Text>
                        </Rows>
                    </Row>
                );
                break;
            case "from":
                return (
                    <Row gap={10}>
                        <Avatar type="custom" size={40} img={img} />
                        <Rows gap={3} rows={["auto"]}>
                            <Text type="p" color="#3C3D3E" fz="11px">
                                {name}
                            </Text>
                            <Row gap={5} onClick={onClick}>
                                <div
                                    className={`${styles.text} ${styles.from}`}
                                >
                                    {text}
                                </div>
                            </Row>
                            <Text
                                type="p"
                                fz="10px"
                                color="#7D7F82"
                                position="end"
                            >
                                {`${hours}:${
                                    minutes < 10 ? "0" + minutes : minutes
                                }`}
                            </Text>
                        </Rows>
                    </Row>
                );
        }
    };

    const msg = generateMessage();

    return <>{msg}</>;
};
