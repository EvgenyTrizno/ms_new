import { FC, useState } from "react";
import { useParams } from "react-router";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { MOBILE } from "@/shared/utils";

import { Chat } from "@/widgets/components/Chat/ui/Chat";
import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";
import { useChat } from "@/shared/model/store/chat";

const ChatPage: FC = () => {
    const { user, chat_id } = useChat();
    const { id } = useParams();

    console.log(chat_id);

    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <ChatContainer>
                <ChatSidebar />
                {id && user && chat_id && <Chat chat_uuid={id} />}
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default ChatPage;
