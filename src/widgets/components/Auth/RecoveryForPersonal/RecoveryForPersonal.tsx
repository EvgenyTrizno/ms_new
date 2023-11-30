import { FC, ChangeEvent } from "react";

import { Btn } from "@/shared/ui/Btn";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";

import styles from "./RecoveryForPersonal.module.scss";
import { useRegistration } from "@/shared/model/store/registration";

export const RecoveryForPersonal: FC = () => {
    const { setNumber, number } = useRegistration();

    return (
        <div className={styles.recovery}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Восстановление
            </Text>
            <div className={styles.subtitle}>
                <Text
                    type="h2"
                    color="#262626"
                    position="center"
                    fz="20px"
                    fw={700}
                >
                    Не удается выполнить вход?
                </Text>
            </div>
            <div className={styles.text}>
                <Text
                    type="p"
                    position="center"
                    fz="20px"
                    color="#00000080"
                    fw={400}
                >
                    Введите телефонный номер и мы отправим вам код для
                    восстановления доступа к<br /> аккаунту.
                </Text>
            </div>
            <form className={styles.form}>
                <Input
                    type="text"
                    placeholder="Введите тел.номер"
                    value={number}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setNumber(e.target.value)
                    }
                />
                <Btn color="#0064FA" type="submit" disabled={!number}>
                    Продолжить
                </Btn>
            </form>
        </div>
    );
};
