import { FC, MouseEventHandler } from "react";
import styles from "./Clinic.module.scss";
import { IClinic } from "@/shared/types/clinic.types";

type Props = {
    data: IClinic;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

export const Clinic: FC<Props> = ({ data, onClick }) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <img className={styles.img} src={data.image || "/assets/clinic.jpg"} alt="clinic" />

            <div className={styles.content}>
                <h5 className={styles.title}>{data.name}</h5>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <p>Страна: </p>
                        <span>{data?.country?.name || "-"}</span>
                    </div>

                    <div className={styles.item}>
                        <p>Город: </p>
                        <span>{data?.city?.name || "-"}</span>
                    </div>

                    <div className={styles.item}>
                        <p>Адрес: </p>
                        <span>{data?.address || "-"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
