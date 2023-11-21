import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { MOBILE } from "@/shared/utils";

import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";

const MessagesPage: FC = () => {
    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <ChatContainer>
                <ChatSidebar />
                выберите чат
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MessagesPage;
