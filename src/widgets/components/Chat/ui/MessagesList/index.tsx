import { FC, useEffect, useState, MouseEvent } from "react";
import { IMessagesListProps } from "./types";
import { useMessageQuery } from "../../lib/hooks/useMessageQuery";
import { Message } from "../Message";
import { useAuth } from "@/shared/model/store/auth";
import { MessagePopUp } from "../MessagePopUp";

export const MessagesList: FC<IMessagesListProps> = ({ chat_id }) => {
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);
    const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);

    const { data, refetch } = useMessageQuery(chat_id);
    const { user } = useAuth();

    useEffect(() => {
        refetch();
    }, [chat_id]);

    const handleOpenPopUp = (e?: MouseEvent<HTMLDivElement>) => {
        setIsOpenPopUp((prev) => !prev);
        setTop((e && e.clientY) ?? 0);
        setLeft((e && e.clientX) ?? 0);
    };

    return (
        <>
            {data &&
                data.data.map((item) => (
                    <Message
                        key={item.id}
                        type={user?.id === item.user.id ? "to" : "from"}
                        onClick={handleOpenPopUp}
                        text={item.text}
                        img={item.user.image}
                        name={item.user.first_name ?? ""}
                        hours={new Date(item.created_at).getHours()}
                        minutes={new Date(item.created_at).getMinutes()}
                    />
                ))}
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
                    copy={() => ({})}
                    select={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    edit={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            )}
        </>
    );
};
