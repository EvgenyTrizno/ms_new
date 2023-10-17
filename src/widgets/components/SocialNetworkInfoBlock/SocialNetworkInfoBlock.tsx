import { FC, ReactNode } from "react";

import styles from "./SocialNetworkInfoBlock.module.scss";

interface ISocialNetworkInfoBlockProps {
    children: ReactNode;
}

export const SocialNetworkInfoBlock: FC<ISocialNetworkInfoBlockProps> = ({
    children,
}) => {
    return <div className={styles.box}>{children}</div>;
};
