import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Image } from "@/shared/ui/Image";

import check from "../../assets/check.svg";
import styles from "./styles.module.scss";

export const AdditionalCheckNotification: FC = () => {
    return (
        <NotificationLayout
            img={
                <div className={styles.circle}>
                    <Image src={check} alt={"check"} width={20} height={20} />
                </div>
            }
            date={new Date().toISOString()}
            text={"Требуется дополнительная проверка записи Перейти"}
            typeIcon={undefined}
        />
    );
};
