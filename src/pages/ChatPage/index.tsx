import { FC, useState } from "react";
import { useParams } from "react-router";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { MOBILE } from "@/shared/utils";

import { Chat } from "@/widgets/components/Chat/ui/Chat";
import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";

const ChatPage: FC = () => {
    const [userId, setUserId] = useState<number>(0);
    const [chatId, setChatId] = useState<number>(0);

    const { id } = useParams();

    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <ChatContainer>
                <ChatSidebar />
                {id && (
                    <Chat chat_uuid={id} user_id={userId} chat_id={chatId} />
                )}
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default ChatPage;
