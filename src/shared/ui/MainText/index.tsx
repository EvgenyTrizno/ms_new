import { FC } from "react";

import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

interface ITextProps {
    text: string;
}

export const MainText: FC<ITextProps> = ({ text }) => {
    return (
        <Text type="h2" className={styles.mainText}>
            {text}
        </Text>
    );
};
