import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
    avatar: string;
    rank: string;
    fio: string;
};

export const DoctorCard: FC<Props> = ({ avatar, rank, fio }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} src={avatar ? avatar : "/assets/doctor.svg"} alt="avatar" />

            <p className={styles.fio} title={fio}>{fio}</p>

            <span className={styles.rank}>{rank}</span>
        </div>
    );
}; 
