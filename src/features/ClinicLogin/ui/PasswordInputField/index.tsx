import { FC, useState } from "react";
import { IPasswordInputFieldProps } from "./types";

import { Row } from "@/shared/ui/Row";
import { ShowPassword } from "@/features/ShowPassword";
import { Input } from "@/shared/ui/Input";

import styles from "./styles.module.scss";

export const PasswordInputField: FC<IPasswordInputFieldProps> = ({
    onChange,
    error,
}) => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => setIsShow((prev) => !prev);

    return (
        <Row
            gap={0}
            className={error ? `${styles.error} ${styles.pass}` : styles.pass}
        >
            <Input
                type={isShow ? "text" : "password"}
                placeholder="Введите пароль"
                border="none"
                borderRadius="8px 0px 0px 8px"
                onChange={onChange}
            />
            <ShowPassword isShow={isShow} onClick={handleClick} />
        </Row>
    );
};
