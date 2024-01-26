import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MOBILE } from "@/shared/utils";
import { MobileMenu } from "@/widgets/components/MobileMenu";

import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";

const MessagesPage: FC = () => {
    const { isOpen, setIsOpen } = useBurgerMenu();
    return (
        <Layout>
            {MOBILE && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <ChatContainer>
                <ChatSidebar />
                {/* {!MOBILE && !TABLET && "выберите чат"} */}
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MessagesPage;
