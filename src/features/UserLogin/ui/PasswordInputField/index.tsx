import { FC, useState } from "react";

import { Row } from "@/shared/ui/Row";
import { ShowPassword } from "@/features/ShowPassword";
import { Input } from "@/shared/ui/Input";

import styles from "./styles.module.scss";
import { IPasswordInputFieldProps } from "./types";

export const PasswordInputField: FC<IPasswordInputFieldProps> = ({
    onChange,
}) => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => setIsShow((prev) => !prev);

    return (
        <Row gap={0} className={styles.pass}>
            <Input
                type={isShow ? "text" : "password"}
                placeholder="Введите пароль"
                border="none"
                borderRadius="0px"
                onChange={onChange}
            />
            <ShowPassword isShow={isShow} onClick={handleClick} />
        </Row>
    );
};
