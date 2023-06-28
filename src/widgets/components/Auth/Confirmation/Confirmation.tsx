import { KeyboardEvent, ChangeEvent, FC, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Btn, Text } from "@/shared";

import styles from "./Confirmation.module.scss";

export const Confirmation: FC = () => {
    const [code, setCode] = useState("");

    const codeRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleCodeInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        i: number
    ) => {
        setCode((code) => {
            const newCode = [...code];
            newCode[i] = e.target.value;
            return newCode.join("");
        });

        if (e.target.value.length > 0 && i < codeRefs.length - 1) {
            codeRefs[i + 1].current?.focus();
        }
    };

    const handleCodeInputKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        i: number
    ) => {
        if (e.key === "Backspace" && i > 0 && !code[i]) {
            codeRefs[i - 1].current?.focus();
        }
    };

    return (
        <div className={styles.confirmation}>
            <Text type="h2" color="#262626" fz="28px" position="center">
                Завершение
            </Text>
            <div className={styles.text}>
                <Text type="p" fz="20px" position="center">
                    Введите код который был отправлен вам на номер, для
                    восстановления доступа к аккаунту.
                </Text>
            </div>
            <div className={styles.wrapper}>
                <input
                    type="text"
                    maxLength={1}
                    className={styles.item}
                    value={code[0] || ""}
                    onChange={(e) => handleCodeInputChange(e, 0)}
                    onKeyDown={(e) => handleCodeInputKeyDown(e, 0)}
                    ref={codeRefs[0]}
                />
                <input
                    type="text"
                    maxLength={1}
                    className={styles.item}
                    value={code[1] || ""}
                    onChange={(e) => handleCodeInputChange(e, 1)}
                    onKeyDown={(e) => handleCodeInputKeyDown(e, 1)}
                    ref={codeRefs[1]}
                />
                <input
                    type="text"
                    maxLength={1}
                    className={styles.item}
                    value={code[2 || ""]}
                    onChange={(e) => handleCodeInputChange(e, 2)}
                    onKeyDown={(e) => handleCodeInputKeyDown(e, 2)}
                    ref={codeRefs[2]}
                />
                <input
                    type="text"
                    maxLength={1}
                    className={styles.item}
                    value={code[3] || ""}
                    onChange={(e) => handleCodeInputChange(e, 3)}
                    onKeyDown={(e) => handleCodeInputKeyDown(e, 3)}
                    ref={codeRefs[3]}
                />
            </div>
            <div className={styles.timer}>
                <Text type="p" position="center" color="#262626" fz="20px">
                    0 0 : 5 9
                </Text>
            </div>
            <Btn color="#0064FA">Зарегестрироваться</Btn>
            <div className={styles.redirect}>
                Уже имеется аккаунт?
                <Link to="/auth/login" className={styles.link}>
                    Войти
                </Link>
            </div>
        </div>
    );
};
