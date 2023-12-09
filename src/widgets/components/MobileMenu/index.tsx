import { FC, useState } from "react";

import { ExtraCallBtn } from "../ExtraCallBtn";

import styles from "./styles.module.scss";

export const MobileMenu: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.menu}>
            <ExtraCallBtn
                className={styles.mobileExtraCall}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};
