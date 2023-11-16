import { FC, useState } from "react";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { MOBILE } from "@/shared/utils";

import { Chat } from "@/widgets/components/Chat/ui/Chat";
import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";

const MessagesPage: FC = () => {
    const [selectChat, setSelectChat] = useState<string>("");
    const [userId, setUserId] = useState<number>(0);
    const [chatId, setChatId] = useState<number>(0);

    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <ChatContainer>
                <ChatSidebar
                    uuid={selectChat}
                    selectChat={setSelectChat}
                    setUserId={setUserId}
                    setChatId={setChatId}
                />
                {selectChat && (
                    <Chat
                        chat_uuid={selectChat}
                        user_id={userId}
                        chat_id={chatId}
                    />
                )}
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MessagesPage;
