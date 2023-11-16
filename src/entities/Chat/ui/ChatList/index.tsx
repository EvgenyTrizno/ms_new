import { FC } from "react";
import { IChatListProps } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { ChatView } from "../ChatView";
import { useChatQuery } from "../../lib/hooks/useChatQuery";
import { useAuth } from "@/shared/model/store/auth";

export const ChatList: FC<IChatListProps> = ({
    selectChat,
    uuid,
    setUserId,
    setChatId,
}) => {
    const { data: chats } = useChatQuery();
    const { user: currUser } = useAuth();

    const handleClick = (user_id: number, uuid: string, chat_id: number) => {
        selectChat(uuid);
        setUserId(user_id);
        setChatId(chat_id);
    };

    return (
        <Rows gap={0} rows={["auto"]}>
            {!chats?.data || chats.data.length === 0
                ? "список пуст"
                : chats.data.map((item) => {
                      const user = item.users.filter(
                          (item) => item.id !== (currUser && currUser.id)
                      );

                      return (
                          <ChatView
                              key={item.id}
                              name={user[0].first_name}
                              time={""}
                              message={""}
                              count={0}
                              active={item.uuid === uuid}
                              img={user[0].image}
                              onClick={() =>
                                  handleClick(user[0].id, item.uuid, item.id)
                              }
                          />
                      );
                  })}
        </Rows>
    );
};
