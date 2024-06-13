import { FC, useRef, useState, ChangeEvent, FocusEvent, KeyboardEvent, useEffect } from "react";

import styles from "./styles.module.scss"
import { Text } from "@/shared/ui/Text";
import { Rows } from "@/shared/ui/Rows";
import { CodeInputs } from "@/entities/Confirmation/ui/CodeInputs";
import { Row } from "@/shared/ui/Row";
import { Cols } from "@/shared/ui/Cols";
import { Button } from "@/shared/ui";
import { Btn } from "@/shared/ui/Btn";
import { DayBtn } from "@/shared/ui/DayBtn";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";

export const ClinicActivity: FC = ({ setForm }) => {
    const { worktime, setWorktime, workdays } = useClinicRegistration();
    const [code, setCode] = useState<string>("");
    const [verifyCode, setVerifyCode] = useState<string>("");
    console.log(worktime)


    useEffect(() => {
        console.log('eff')
        if (verifyCode.length == 4) {
            const workHours = parseInt(verifyCode.slice(0, 2)) * 60
            const workMinutes = parseInt(verifyCode.slice(2, 4))
            setWorktime(workHours + workMinutes)
        } else if (verifyCode.length == 0) {
            setWorktime(0)
        }
    }, [verifyCode])


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
        setVerifyCode((verifyCode) => {
            const newCode = [...verifyCode];
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
        if (e.key === "Backspace" && i > 0 && !verifyCode[i]) {
            codeRefs[i - 1].current?.focus();
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        e.target.classList.add(styles.active);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        e.target.classList.remove(styles.active);
    };


    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

    return <>

        <Text position="center" type="h1" fz={24} className={styles.title} >Укажите активность своей клиники</Text>
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <Text position="center" fz={20} >Выберите дни</Text>

                <div className={styles.days_container}>
                    {
                        days.map((day) => (
                            <DayBtn day={day} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.block}>

                <Text position="center" fz={20} >Выберите время</Text>
                <Row gap={20} style={{ justifyContent: "center", paddingTop: "20px" }}>
                    <input
                        type="text"
                        maxLength={1}
                        className={styles.item}
                        value={verifyCode[0] || ""}
                        onChange={(e) => handleCodeInputChange(e, 0)}
                        onKeyDown={(e) => handleCodeInputKeyDown(e, 0)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        ref={codeRefs[0]}
                    />
                    <input
                        type="text"
                        maxLength={1}
                        className={styles.item}
                        value={verifyCode[1] || ""}
                        onChange={(e) => handleCodeInputChange(e, 1)}
                        onKeyDown={(e) => handleCodeInputKeyDown(e, 1)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        ref={codeRefs[1]}
                    />
                    <Text fw={600}>часа</Text>
                    <input
                        type="text"
                        maxLength={1}
                        className={styles.item}
                        value={verifyCode[2 || ""]}
                        onChange={(e) => handleCodeInputChange(e, 2)}
                        onKeyDown={(e) => handleCodeInputKeyDown(e, 2)}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        ref={codeRefs[2]}
                    />
                    <input
                        type="text"
                        maxLength={1}
                        className={styles.item}
                        value={verifyCode[3] || ""}
                        onChange={(e) => handleCodeInputChange(e, 3)}
                        onKeyDown={(e) => handleCodeInputKeyDown(e, 3)}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        ref={codeRefs[3]}
                    />
                    <Text fw={600}>минут</Text>
                </Row>

            </div>
        </div >
        <div className={styles.stat_container}>
            <div className={styles.stat}>
                <Text className={styles.stat_text} fw={200}>Просмотры - <b>420</b></Text>
                <Text className={styles.stat_text} fw={200}>Количество заданий - <b>420</b></Text>

            </div >
            <div className={styles.stat}>
                <Text className={styles.stat_text} fw={200}>Охват - <b>420</b></Text>
                <Text className={styles.stat_text} fw={200}>Сумма заработка - <b>420</b></Text>

            </div >
            <div className={styles.stat}>
                <Text className={styles.stat_text} fw={200}>Показы - <b>420</b></Text>
                <Text className={styles.stat_text} fw={200}>Кол-во пациентов - <b>420</b></Text>

            </div >
        </div >

        <Btn
            color="#0064FA"
            disabled={(worktime === 0 || workdays.length === 0) ? true : false}
            onClick={() => setForm(true)}
        >
            Зарегистрироваться
        </Btn>
        {/* <Button title="Зарегистрироваться" size="normal" styleType="fill" type="button"></Button> */}
    </>
};
