import { FC } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router";

type Props = {
    id: number;
    avatar: string;
    rank: string;
    fio: string;
};

export const DoctorCard: FC<Props> = ({ id, avatar, rank, fio }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper} onClick={() => navigate(`/doctor/${id}`)}>
            <img className={styles.avatar} src={avatar ? avatar : "/assets/doctor.svg"} alt="avatar" />

            <p className={styles.fio} title={fio}>{fio}</p>

            <span className={styles.rank}>{rank}</span>
        </div>
    );
}; 
