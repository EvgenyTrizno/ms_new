import { FC } from "react";

import { Text } from "@/shared";

import users from "/assets/users-gray.svg";
import messages from "/assets/messages-gray.svg";
import styles from "./SocialNetworkInfoLayout.module.scss";

interface ISocialNetworkInfoLayout {
    icon: string;
    subs: number;
    unreadedMessages: number;
}

export const SocialNetworkInfoLayout: FC<ISocialNetworkInfoLayout> = ({
    icon,
    subs,
    unreadedMessages,
}) => {
    return (
        <>
            <div className={styles.top}>
                <img src={icon} alt="" />
                <div className={styles.data}>
                    <Text type="h2" fz="17px">
                        Подписчики
                    </Text>
                    <div className={styles.count}>
                        <img src={users} alt="" />
                        <Text type="p" color="#7D7F82">
                            {subs}
                        </Text>
                    </div>
                </div>
            </div>
            <div className={styles.unread}>
                <div className={styles.text}>
                    <img src={messages} alt="" />
                    <Text type="p" fz="14px" color="#B1B2B4">
                        Непрочитанные
                    </Text>
                </div>
                <Text type="h4" color="#7D7F82">
                    {unreadedMessages}
                </Text>
            </div>
        </>
    );
};
