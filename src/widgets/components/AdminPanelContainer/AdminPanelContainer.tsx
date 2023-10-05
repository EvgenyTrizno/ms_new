import { FC, ReactNode } from "react";

import styles from "./AdminPanelContainer.module.scss";

interface IAdminPanelContainerProps {
    children: ReactNode;
}

export const AdminPanelContainer: FC<IAdminPanelContainerProps> = ({
    children,
}) => {
    return <div className={styles.container}>{children}</div>;
};
