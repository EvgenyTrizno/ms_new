import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Image } from "@/shared/ui/Image";

import plus from "./assets/plus.svg";
import styles from "./styles.module.scss";

export const AddedCenterNotification: FC = () => {
    return (
        <NotificationLayout
            img={
                <div className={styles.circle}>
                    <Image width={20} height={20} src={plus} alt={"plus"} />
                </div>
            }
            date={new Date().toISOString()}
            text={
                "Ваш центр был добавлен дополнительным центром у Иванов Иван Иванович"
            }
            typeIcon={undefined}
        />
    );
};
