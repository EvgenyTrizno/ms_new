
import { IClinic } from "@/shared/types";
import { FC } from "react";

type LastVisitClincProps = {
    clinic: IClinic
}

import clinicLogo from "../assets/clinic.svg"

import styles from "./styles.module.scss"
import { PC } from "@/shared/utils";


export const LastVisitClinic: FC<LastVisitClincProps> = ({ clinic }) => {
    return (
        <div className={styles.clinic__block}>
            <img src={clinicLogo} alt="" className={styles.clinic__img} />
            <h3 className={styles.clinic__name}>
                Клиника выздоровления
            </h3>
        </div>
    );
};
