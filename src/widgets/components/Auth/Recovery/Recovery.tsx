import { FC, useState } from "react";

import { Btn, Input, Text } from "@/shared";

import styles from "./Recovery.module.scss";

export const Recovery: FC = () => {
    const [isSelect, setIsSelect] = useState<string>("tel");

    return (
        <div className={styles.recovery}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Восстановление
            </Text>
            <div className={styles.subtitle}>
                <Text type="h2" color="#262626" position="center" fz="20px">
                    Не удается выполнить вход
                </Text>
            </div>
            <div className={styles.text}>
                <Text type="p" position="center" fz="20px">
                    Введите телефонный номер или электронную почту и мы отправим
                    вам код для восстановления доступа к аккаунту.
                </Text>
            </div>
            <div className={styles.swithcer}>
                <div
                    className={styles.item}
                    onClick={() => setIsSelect("tel")}
                    style={
                        isSelect === "tel"
                            ? { borderBottomColor: "#262626" }
                            : {}
                    }
                >
                    <Text type="p" fz="24px" color="#414141">
                        Тел. Номер
                    </Text>
                </div>
                <div
                    className={styles.item}
                    style={
                        isSelect === "mail"
                            ? { borderBottomColor: "#262626" }
                            : {}
                    }
                    onClick={() => setIsSelect("mail")}
                >
                    <Text type="p" fz="24px" color="#414141">
                        Эл. Почта
                    </Text>
                </div>
            </div>
            <form action="#" className={styles.form}>
                {isSelect === "tel" ? (
                    <Input type="text" placeholder="Введите тел.номер" />
                ) : (
                    <Input type="text" placeholder="Введите эл.почту" />
                )}
                <Btn color="#0064FA">Продолжить</Btn>
            </form>
        </div>
    );
};
