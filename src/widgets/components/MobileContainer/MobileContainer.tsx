import { FC, ReactNode } from "react";

import styles from "./MobileContainer.module.scss";

interface IProps {
    children: ReactNode;
}

export const MobileContainer: FC<IProps> = ({ children }) => {
    return (
        <div className={styles.container} id="mcontainer">
            {children}
        </div>
    );
};
