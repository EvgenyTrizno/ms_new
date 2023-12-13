import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const Question: FC = () => {
    return (
        <BlueBox className={styles.question}>
            <Text type="h4">Какие принимаются методы оплаты?</Text>
            <Text type="h2">217</Text>
        </BlueBox>
    );
};
