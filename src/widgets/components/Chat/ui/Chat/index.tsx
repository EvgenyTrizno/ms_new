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

export const Chat: FC<IChatProps> = ({ chat_uuid, user_id, chat_id }) => {
    const [isOpenEmoje, setIsOpenEmoji] = useState<boolean>(false);
    const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);
    const [ws, setWs] = useState<WebSocket | null>();

    const { data } = useMessageQuery(chat_id);

    console.log(data);

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
            <ChatHeader call={<Call />} actions={undefined} />
            <ChatBox>
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
                {/* <Message
                    type="from"
                    onClick={(e) =>
                        handleOpenPopUp(e as MouseEvent<HTMLDivElement>)
                    }
                />
                <Message
                    type="to"
                    onClick={(e) =>
                        handleOpenPopUp(e as MouseEvent<HTMLDivElement>)
                    }
                /> */}
                {data &&
                    data.data.map((item) => (
                        <Message
                            key={item}
                            type="from"
                            onClick={(e) =>
                                handleOpenPopUp(e as MouseEvent<HTMLDivElement>)
                            }
                        />
                    ))}
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
