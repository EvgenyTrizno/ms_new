import { FC } from "react";

import { Text } from "@/shared/ui/Text";

import users from "/assets/users-gray.svg";
import messages from "/assets/messages-gray.svg";
import styles from "./SocialNetworkInfoLayout.module.scss";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";

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
                <img src={icon} alt="" className={styles.icon} />
                <div className={styles.data}>
                    <Text
                        type="h2"
                        fz={LAPTOP ? "17px" : SMALL_LAPTOP ? "15px" : ""}
                    >
                        Подписчики
                    </Text>
                    <div className={styles.count}>
                        <img src={users} alt="" />
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz={SMALL_LAPTOP ? "14px" : ""}
                        >
                            {subs}
                        </Text>
                    </div>
                </div>
            </div>
            <div className={styles.unread}>
                <div className={styles.text}>
                    <img src={messages} alt="" />
                    <Text
                        type="p"
                        fz={SMALL_LAPTOP ? "12px" : "14px"}
                        color="#B1B2B4"
                    >
                        Непрочитанные
                    </Text>
                </div>
                <Text type="h4" fz={SMALL_LAPTOP ? "14px" : ""} color="#7D7F82">
                    {unreadedMessages}
                </Text>
            </div>
        </>
    );
};
