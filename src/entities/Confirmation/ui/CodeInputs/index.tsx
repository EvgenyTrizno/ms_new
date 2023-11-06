import {
    FC,
    useRef,
    ChangeEvent,
    useState,
    KeyboardEvent,
    FocusEvent,
} from "react";

import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";
import { ICodeInputsProps } from "./types";

export const CodeInputs: FC<ICodeInputsProps> = ({ setCode }) => {
    const [verifyCode, setVerifyCode] = useState<string>("");

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

    if (verifyCode.length === 4) {
        setCode(verifyCode);
    }

    return (
        <Row gap={20} style={{ justifyContent: "center" }}>
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
        </Row>
    );
};
