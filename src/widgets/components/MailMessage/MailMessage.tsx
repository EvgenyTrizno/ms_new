import { FC } from "react";
import { IMailHeaderProps } from "../MailHeader/MailHeader";

import { Text } from "@/shared";
import { MailManage } from "../MailManage/MailManage";
import { SMALL_LAPTOP } from "@/shared/utils";

import styles from "./MailMessage.module.scss";

export const MailMessage: FC<IMailHeaderProps> = ({ date }) => {
    return (
        <div
            className={styles.message}
            style={{ gridTemplateColumns: !date ? "125px 1fr 125px" : "" }}
        >
            <Text type="h4" fz={SMALL_LAPTOP ? "14px" : ""}>
                hh.ru
            </Text>
            <div className={styles.text}>
                <Text type="h4" color="#787B86" fz={SMALL_LAPTOP ? "14px" : ""}>
                    Ваше резюме просматривали
                </Text>
                &nbsp;
                <Text type="p" color="#AAAFBD" fz={SMALL_LAPTOP ? "14px" : ""}>
                    -
                </Text>
                &nbsp;
                <Text type="p" color="#787B86" fz={SMALL_LAPTOP ? "14px" : ""}>
                    Ваше резюме вчера просматривали 3 компании
                </Text>
            </div>
            {!SMALL_LAPTOP ||
                (date && (
                    <Text type="h4" color="#1D2226" position="center">
                        12:30
                    </Text>
                ))}
            <MailManage />
        </div>
    );
};
