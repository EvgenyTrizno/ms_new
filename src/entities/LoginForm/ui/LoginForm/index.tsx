import { FC } from "react";
import { ILoginFormProps } from "./types";

import { Btn } from "@/shared/ui/Btn";

import styles from "./styles.module.scss";

export const LoginForm: FC<ILoginFormProps> = ({ children }) => {
    return (
        <form>
            {children}
            <Btn type="submit" color="#0064FA" className={styles.formBtn}>
                Войти
            </Btn>
        </form>
    );
};
