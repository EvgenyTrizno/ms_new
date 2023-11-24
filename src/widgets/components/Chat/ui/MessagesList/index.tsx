import { FC } from "react";
import { IMessagesListProps } from "./types";
import { useMessageQuery } from "../../lib/hooks/useMessageQuery";
import { Message } from "../Message";
import { getMessages } from "../../api/messages";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const MessagesList: FC<IMessagesListProps> = ({ ws, chat_id }) => {
    const { data } = useMessageQuery(chat_id);

    console.log(data?.data);

    return (
        <>
            {data &&
                data.data.map((item) => (
                    <Message
                        key={item.id}
                        type={"from"}
                        onClick={() => ({})}
                        text={item.text}
                    />
                ))}
        </>
    );
};
