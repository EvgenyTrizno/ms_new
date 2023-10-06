import { FC } from "react";

import { Chat, Header } from "@/widgets";
import { SMALL_LAPTOP, PC } from "@/shared/utils";

import styles from "./ChatPage.module.scss";

const ChatPage: FC = () => {
    return (
        <div className={styles.chat}>
            {(PC || SMALL_LAPTOP) && <Header width="100%" />}
            <div className={styles.view}>
                <Chat />
            </div>
        </div>
    );
};

export default ChatPage;
