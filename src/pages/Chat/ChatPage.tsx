import { FC } from "react";

import { Chat, Header } from "@/widgets";

import styles from "./ChatPage.module.scss";

const ChatPage: FC = () => {
    return (
        <div className={styles.chat}>
            <Header />
            <div className={styles.view}>
                <Chat />
            </div>
        </div>
    );
};

export default ChatPage;
