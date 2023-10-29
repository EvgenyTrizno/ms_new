import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { Filter } from "@/shared/ui/Filter";
import { Search } from "@/features/Search/ui";
import { MOBILE } from "@/shared/utils";

// import { ABSOLUTE_PATH } from "@/shared/config";

import { Chat } from "@/widgets/components/Chat/ui";
import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import { ChatContainer } from "@/entities/Chat/ui/ChatContainer";
import { ChatList } from "@/entities/Chat/ui/ChatList";
import { ChatView } from "@/entities/Chat/ui/ChatView";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";

const MessagesPage: FC = () => {
    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <ChatContainer>
                <ChatSidebar>
                    <Search placeholder="Поиск чатов" />
                    <Filter data={["Сообщения", "Звонки"]} width="100%" />
                    <ChatList>
                        <ChatView
                            name={getFullUsernameWithInitials(
                                "Яковенко",
                                "Анастасия",
                                "Сергеевна"
                            )}
                            time={"2:23"}
                            message={"lorem ipsum"}
                            count={10}
                            active={false}
                        />
                    </ChatList>
                </ChatSidebar>
                <Chat />
            </ChatContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MessagesPage;
