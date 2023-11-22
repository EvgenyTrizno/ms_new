import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Image } from "@/shared/ui/Image";

import fine from "./assets/fine.svg";
import styles from "./styles.module.scss";

export const FineNotification: FC = () => {
    return (
        <NotificationLayout
            img={
                <div className={styles.circle}>
                    <Image src={fine} alt={"fine"} width={20} height={20} />
                </div>
            }
            date={new Date().toISOString()}
            text={"Ваша клиника была оштрафована. Узнать причину"}
            typeIcon={undefined}
        />
    );
};
