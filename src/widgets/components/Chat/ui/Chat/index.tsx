import { FC, useState, useMemo, useCallback } from "react";
import { IChatProps } from "./types";

import { ChatLayout } from "@/entities/Chat/ui/ChatLayout";
import { ChatHeader } from "../ChatHeader";
import { Call } from "@/features/Call";
import { MessageBox } from "@/features/MessageBox/ui";
import { ChatPanel } from "../ChatPanel";
import { SendMessage } from "@/features/SendMessage";
import { Attachment } from "@/features/Attachment";
import { ChatBox } from "@/entities/Chat/ui/ChatBox";
import { Emoji } from "@/features/Emoji/ui";
import { ABSOLUTE_PATH } from "@/shared/config";
// import { MessagePopUp } from "../MessagePopUp";
// import { FastMessagesList } from "../FastMessagesList";
// import { AditionalText } from "../AditionalText";
import { EmojiModal } from "@/widgets/components/EmojiModal";
import { ChatInfo } from "@/widgets/components/ChatInfo";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { IWSResponse } from "../../types/wsResponce";
import { MessagesList } from "../MessagesList";
import { useChat } from "@/shared/model/store/chat";

export const Chat: FC<IChatProps> = ({ chat_uuid }) => {
    const [isOpenEmoje, setIsOpenEmoji] = useState<boolean>(false);
    const [isOpenInfo, setIsInfo] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
    const [ws, setWs] = useState<WebSocket>();
    const [msg, setMsg] = useState<string>("");

    const { getCookie } = useCookie();
    const { user, chat_id } = useChat();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const token = useCallback(() => getCookie("access_token"), [])();

    useMemo(() => {
        const ws = new WebSocket(
            `ws://${ABSOLUTE_PATH}/ws/chat/${chat_uuid}/?token=${token}`
        );

        setWs(ws);
    }, [chat_uuid, token]);

    const handleOpenEmoje = () => {
        setIsOpenEmoji((prev) => !prev);
    };

    // const handleCopy = (e: MouseEvent<HTMLLIElement>) => {
    //     console.log(e.currentTarget.innerText);
    // };

    if (ws) {
        ws.onmessage = (e) => {
            const data: IWSResponse = JSON.parse(e.data);

            setStatus(data.online_users?.length === 2);
        };
    }

    const sendMsg = () => {
        ws &&
            ws.send(
                JSON.stringify({
                    action: "send_message",
                    text: msg,
                })
            );
    };

    return (
        <ChatLayout>
            <ChatHeader
                user={user}
                status={status}
                openInfo={setIsInfo}
                call={<Call />}
                actions={undefined}
            />
            <ChatBox>
                {isOpenInfo && <ChatInfo />}
                {isOpenEmoje && <EmojiModal />}
                {/* <AditionalText text="Ваш ведущий центр создал новую запись" /> */}
                <MessagesList chat_id={chat_id} />
                {/* <FastMessagesList /> */}
            </ChatBox>
            <ChatPanel
                attachment={<Attachment />}
                messageBox={
                    <MessageBox
                        ws={ws}
                        emoji={
                            <Emoji
                                isOpen={isOpenEmoje}
                                onClick={handleOpenEmoje}
                            />
                        }
                        setMsg={setMsg}
                    />
                }
                sendMsg={<SendMessage onClick={sendMsg} />}
            />
        </ChatLayout>
    );
};
