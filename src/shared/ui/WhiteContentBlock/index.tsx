import { FC } from "react";
import { IWhiteContentBlockProps } from "./types";

import styles from "./styles.module.scss";

export const WhiteContentBlock: FC<IWhiteContentBlockProps> = ({
    children,
    style,
    className,
}) => {
    return (
        <div className={`${className} ${styles.box}`} style={style}>
            {children}
        </div>
    );
};
