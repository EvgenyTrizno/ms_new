import { FC } from "react";
import styles from "./Clinic.module.scss";
import { IClinic } from "@/shared/types/clinic.interface";

type Props = {
  data: IClinic;
};

export const Clinic: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={data.image} alt="clinic" />

      <div className={styles.content}>
        <h5 className={styles.title}>{data.name}</h5>

        <div className={styles.list}>
          <div className={styles.item}>
            <p>Страна: </p>
            <span>{data.country?.name || "-"}</span>
          </div>

          <div className={styles.item}>
            <p>Город: </p>
            <span>{data.city?.name || "-"}</span>
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
