import { FC, useState } from "react";

import { ChatLayout } from "@/entities/Chat/ui/ChatLayout";
import { ChatHeader } from "@/entities/Chat/ui/ChatHeader";
import { Call } from "@/features/Call";
import { ChatPanel } from "@/entities/Chat/ui/ChatPanel";
import { MessageBox } from "@/features/MessageBox/ui";
import { SendMessage } from "@/features/SendMessage";
import { Attachment } from "@/features/Attachment";
import { ChatBox } from "@/entities/Chat/ui/ChatBox";
import { Emoji } from "@/features/Emoji/ui";
import { Message } from "@/entities/Chat/ui/Message";

export const Chat: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <ChatLayout>
            <ChatHeader call={<Call />} actions={undefined} />
            <ChatBox>
                <Message type="from" />
                <Message type="to" />
            </ChatBox>
            <ChatPanel
                attachment={<Attachment />}
                messageBox={
                    <MessageBox
                        emoji={<Emoji isOpen={isOpen} onClick={handleClick} />}
                        value={""}
                        onChange={() => ({})}
                    />
                }
                sendMsg={<SendMessage onClick={() => ({})} />}
            />
        </ChatLayout>
    );
};
