import { FC, useEffect, useState, MouseEvent } from "react";
import { IChatProps } from "./types";

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
import { ABSOLUTE_PATH } from "@/shared/config";
import { MessagePopUp } from "../MessagePopUp";
import { useMessageQuery } from "../../lib/hooks/useMessageQuery";
import { FastMessagesList } from "../FastMessagesList";
import { AditionalText } from "../AditionalText";
import { EmojiModal } from "@/widgets/components/EmojiModal";
import { ChatInfo } from "@/widgets/components/ChatInfo";

export const Chat: FC<IChatProps> = ({ chat_uuid, user_id, chat_id }) => {
    const [isOpenEmoje, setIsOpenEmoji] = useState<boolean>(false);
    const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
    const [isOpenInfo, setIsInfo] = useState<boolean>(false);
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);
    const [ws, setWs] = useState<WebSocket | null>();

    const { data } = useMessageQuery(chat_id);

    useEffect(() => {
        const ws = new WebSocket(`ws://${ABSOLUTE_PATH}/ws/chat/${chat_uuid}/`);
        setWs(ws);

        ws.onopen = () => {
            ws.send(
                JSON.stringify({
                    action: "connect_entity",
                    type: "user",
                    id: user_id,
                })
            );
        };

        return () => {
            ws.onclose = () => {
                ws.send(
                    JSON.stringify({
                        action: "disconnect_entity",
                        type: "user",
                        id: user_id,
                    })
                );
            };
        };
    }, [chat_uuid, user_id]);

    const handleOpenEmoje = () => {
        setIsOpenEmoji((prev) => !prev);
    };

    const handleOpenPopUp = (e: MouseEvent<HTMLDivElement>) => {
        setIsOpenPopUp((prev) => !prev);
        setTop(e.clientY);
        setLeft(e.clientX);
    };

    const handleCopy = (e: MouseEvent<HTMLLIElement>) => {
        console.log(e.currentTarget.innerText);
    };

    return (
        <ChatLayout>
            <ChatHeader
                openInfo={setIsInfo}
                call={<Call />}
                actions={undefined}
            />
            <ChatBox>
                {isOpenInfo && <ChatInfo />}
                {isOpenPopUp && (
                    <MessagePopUp
                        top={`${top}px`}
                        left={`${left}px`}
                        replay={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        remove={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        copy={handleCopy}
                        select={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        edit={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                )}
                {isOpenEmoje && <EmojiModal />}
                <AditionalText text="Ваш ведущий центр создал новую запись" />
                {data &&
                    data.data.map((item) => (
                        <Message
                            // avatar={item.}
                            key={item.id}
                            type="from"
                            onClick={(e) =>
                                handleOpenPopUp(e as MouseEvent<HTMLDivElement>)
                            }
                        />
                    ))}
                <FastMessagesList />
            </ChatBox>
            <ChatPanel
                attachment={<Attachment />}
                messageBox={
                    <MessageBox
                        emoji={
                            <Emoji
                                isOpen={isOpenEmoje}
                                onClick={handleOpenEmoje}
                            />
                        }
                        value={""}
                        onChange={() => ({})}
                    />
                }
                sendMsg={<SendMessage onClick={() => ({})} />}
            />
        </ChatLayout>
    );
};
