import {
    KeyboardEvent,
    ChangeEvent,
    FC,
    useRef,
    useState,
    useEffect,
} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { Btn, Text } from "@/shared";
import { Auth } from "@/shared/api/Auth";
import { useUserData } from "@/shared/model/store";
import { getAccessTokenFromCookies, setCookie } from "@/features";
import { Account } from "@/shared/api/Account";
import { MOBILE_SCREEN } from "@/shared/utils";

import styles from "./Confirmation.module.scss";

export const Confirmation: FC = () => {
    const [code, setCode] = useState<string>("");
    const [seconds, setSeconds] = useState<number>(60);
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const { number, pass1, email } = useUserData();
    const {
        sendVerifyCode,
        resendVerifyCode,
        getToket,
        sendVerifyCodeRecoveryPassOnPhone,
    } = Auth();
    const { sendVerifyCodeForVerifyEmail } = Account();

    const codeRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const noCode = code.length !== 4;
    const type = searchParams.get("type");
    const redirect = searchParams.get("redirect");
    const token = getAccessTokenFromCookies();

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

    const handleClick = () => {
        if (code) {
            if (number && redirect === "registration") {
                sendVerifyCode(number, +code)
                    .then((res) => console.log(res))
                    .then(() =>
                        getToket(number, pass1)
                            .then((res) => {
                                setCookie("access_token", res.access, 1);
                                setCookie("refresh_token", res.refresh, 1);
                            })
                            .then(() => navigate("/"))
                    );
            } else if (number && redirect === "recovery" && type === "number") {
                sendVerifyCodeRecoveryPassOnPhone(number, code)
                    .then((res) => console.log(res))
                    .then(() => navigate("/create-new-password?type=number"));
            } else if (email && redirect === "recovery" && type === "email") {
                sendVerifyCodeRecoveryPassOnPhone(email, code)
                    .then((res) => console.log(res))
                    .then(() => navigate("/create-new-password?type=email"));
            } else if (
                email &&
                token &&
                redirect === "verify" &&
                type === "email"
            ) {
                sendVerifyCodeForVerifyEmail(token, code, email)
                    .then((res) => console.log(res))
                    .then(() =>
                        navigate(`${MOBILE_SCREEN ? "/m/" : "/profile"}`)
                    );
            }
        }
    };

    const resendCodeHandler = () => {
        if (number !== "") {
            resendVerifyCode(number);
        }
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [seconds]);

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
                    {seconds === 0 ? (
                        <span
                            style={{
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={resendCodeHandler}
                        >
                            Выслать код повторно
                        </span>
                    ) : seconds === 60 ? (
                        "1:00"
                    ) : (
                        `00:${seconds < 10 ? `0${seconds}` : seconds}`
                    )}
                </Text>
            </div>
            <Btn color="#0064FA" onClick={handleClick} disabled={noCode}>
                {redirect === "registration"
                    ? "Зарегестрироваться"
                    : "Продолжить"}
            </Btn>
            <div className={styles.redirect}>
                Уже имеется аккаунт?
                <Link to="/auth/login" className={styles.link}>
                    Войти
                </Link>
            </div>
        </div>
    );
};
