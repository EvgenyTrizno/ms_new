import { FC } from "react";

import { ContactCard } from "../ContactCard";
import { AddBtn } from "../AddBtn";

import styles from "./styles.module.scss";
import { MOBILE, TABLET } from "@/shared/utils";

export const Contact: FC = () => {
    return (
        <div className={styles.content}>
            {!MOBILE && !TABLET && (
                <div className={styles.list}>
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <AddBtn />
                </div>
            )}
        </div>
    );
};
