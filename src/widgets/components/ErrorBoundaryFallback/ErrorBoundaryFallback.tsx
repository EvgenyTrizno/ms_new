import { FC } from "react";

import { Btn } from "@/shared/ui/Btn";

import error from "/assets/error-boundary-fallback.svg";
import errorRed from "/assets/error-boundary-fallback-red.svg";
import styles from "./ErrorBoundaryFallback.module.scss";

export const ErrorBoundaryFallback: FC = () => {
    const sick = "Болен";

    const handleClick = () => {
        location.pathname = "/";
    };

    return (
        <div className={styles.box}>
            <img src={sick ? errorRed : error} alt="" />
            <Btn color="#0064FA" width="436px" onClick={handleClick}>
                Вернуться
            </Btn>
        </div>
    );
};
