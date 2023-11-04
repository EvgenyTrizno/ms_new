import { FC } from "react";
import { IAuthContainerProps } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const AuthContainer: FC<IAuthContainerProps> = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <WhiteContentBlock className={styles.wrapper}>
                <Text type="h2" position="center" fz="24px">
                    {title}
                </Text>
                {children}
            </WhiteContentBlock>
        </div>
    );
};
