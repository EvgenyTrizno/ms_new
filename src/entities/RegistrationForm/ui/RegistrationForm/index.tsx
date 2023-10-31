import { FC } from "react";
import { IRegistrationForm } from "./types";

import { Btn } from "@/shared/ui/Btn";

import styles from "./styles.module.scss";

export const RegistrationForm: FC<IRegistrationForm> = ({ children }) => {
    return (
        <form>
            {children}
            <Btn type="submit" color="#0064FA" className={styles.formBtn}>
                Продолжить
            </Btn>
        </form>
    );
};
