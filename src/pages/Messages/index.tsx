import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MOBILE, TABLET } from "@/shared/utils";
import { MobileMenu } from "@/widgets/components/MobileMenu";

import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";

const MessagesPage: FC = () => {
    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <ChatContainer>
                <ChatSidebar />
                {/* {!MOBILE && !TABLET && "выберите чат"} */}
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MessagesPage;
