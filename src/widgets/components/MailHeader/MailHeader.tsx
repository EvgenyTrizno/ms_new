import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { SMALL_LAPTOP } from "@/shared/utils";

import styles from "./MailHeader.module.scss";

export interface IMailHeaderProps {
    date: boolean;
}

export const MailHeader: FC<IMailHeaderProps> = ({ date = true }) => {
    return (
        <div
            className={styles.mailHeader}
            style={{
                gridTemplateColumns: !date ? "125px 1fr 125px" : "",
            }}
        >
            <Text type="h4" fz={SMALL_LAPTOP ? "12px" : "14px"} color="#7D7F82">
                От
            </Text>
            <Text type="h4" fz={SMALL_LAPTOP ? "12px" : "14px"} color="#7D7F82">
                Сообщение
            </Text>
            {date && (
                <Text type="h4" fz="14px" color="#7D7F82" position="center">
                    Дата
                </Text>
            )}
        </div>
    );
};
