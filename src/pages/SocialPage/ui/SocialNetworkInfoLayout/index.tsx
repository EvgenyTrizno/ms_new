import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Row } from "@/shared/ui/Row";

import users from "./assets/icon.svg";
import messages from "/assets/messages-gray.svg";
import styles from "./styles.module.scss";

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
        <WhiteContentBlock className={styles.social}>
            <Row gap={16} className={styles.top}>
                <img src={icon} alt="" className={styles.icon} />
                <div className={styles.data}>
                    <Text type="h2">Подписчики</Text>
                    <Row gap={8} className={styles.subs}>
                        <img src={users} alt="" />
                        <Text type="p" color="#7D7F82">
                            {subs}
                        </Text>
                    </Row>
                </div>
            </Row>
            <Row gap={0} className={styles.bottom}>
                <Row gap={10} className={styles.unread}>
                    <img src={messages} alt="" />
                    <Text type="p" color="#B1B2B4">
                        Непрочитанные
                    </Text>
                </Row>
                <Text type="h4" color="#7D7F82">
                    {unreadedMessages}
                </Text>
            </Row>
        </WhiteContentBlock>
    );
};
