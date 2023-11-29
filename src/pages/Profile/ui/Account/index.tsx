import { FC, useState } from "react";

import { Input } from "@/shared/ui/Input";
import { useAuth } from "@/shared/model/store/auth";
import { Text } from "@/shared/ui/Text";
import { Rows } from "@/shared/ui/Rows";
import { Cols } from "@/shared/ui/Cols";
import { BlueBox } from "@/shared/ui/BlueBox";
import { Image } from "@/shared/ui/Image";

import cirleDefault from "./assets/tick-circle.svg";
import cirleVerify from "./assets/tick-circle-verify.svg";
import styles from "./styles.module.scss";
import { Row } from "@/shared/ui/Row";
import { ChangeBtn } from "../ChangeBtn";

export const Account: FC = () => {
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");

    const { user } = useAuth();

    return (
        <Rows gap={24} rows={["auto"]} style={{ marginTop: 24 }}>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Основная информация
                    </Text>
                    <ChangeBtn />
                </Row>
                <Cols type="auto" count={2} gap={16}>
                    <Rows gap={16} rows={["repeat(4, 49px)"]}>
                        <Input type="text" placeholder="Имя" />
                        <Input type="text" placeholder="Дата рождения" />
                        <Input type="text" placeholder="Логин" />
                        <Input type="text" placeholder="Город" />
                    </Rows>
                    <Rows gap={16} rows={["repeat(4, 49px)"]}>
                        <Input type="text" placeholder="Фамилия" />
                        <Input type="text" placeholder="Пол" />
                        <Input type="text" placeholder="Страна" />
                        <Input type="text" placeholder="Адрес" />
                    </Rows>
                </Cols>
            </Rows>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Интерес
                    </Text>
                    <ChangeBtn />
                </Row>
                <Input type="text" placeholder="Интерес" />
            </Rows>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Защита профиля
                    </Text>
                    <ChangeBtn />
                </Row>
                <Cols type="auto" count={2} gap={16}>
                    <div
                        className={`${styles.protection} ${
                            user && user.number && styles.verify
                        }`}
                    >
                        <Text type="p" fz="14px" color="#7D7F82">
                            Номер
                        </Text>
                        <Input type="text" value={user?.number} />
                        <Image
                            src={
                                !user || !user.number
                                    ? cirleDefault
                                    : cirleVerify
                            }
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.protection} ${
                            user && user.email && styles.verify
                        }`}
                    >
                        <Text type="p" fz="14px" color="#7D7F82">
                            Эл. почта
                        </Text>
                        <Input type="text" value={user?.email} />
                        <Image
                            src={
                                !user || !user.email
                                    ? cirleDefault
                                    : cirleVerify
                            }
                            alt=""
                        />
                    </div>
                </Cols>
            </Rows>
        </Rows>
    );
};
