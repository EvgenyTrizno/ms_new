import { FC } from "react";

import { useUserCondition } from "@/shared/model/store";

import error from "/assets/error-boundary-fallback.svg";
import errorRed from "/assets/error-boundary-fallback-red.svg";
import styles from "./ErrorBoundaryFallback.module.scss";

export const ErrorBoundaryFallback: FC = () => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div className={styles.box}>
            <img src={sick ? errorRed : error} alt="" />
        </div>
    );
};
