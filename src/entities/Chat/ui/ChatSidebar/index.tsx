import { FC, useState } from "react";
import { IChatSidebarProps } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { Search } from "@/features/Search";
import { Filter } from "@/shared/ui/Filter";
import { ChatList } from "../ChatList";

import styles from "./styles.module.scss";

export const ChatSidebar: FC<IChatSidebarProps> = ({
    selectChat,
    uuid,
    setUserId,
    setChatId,
}) => {
    const [filter, setFilter] = useState("Сообщения");

    return (
        <div className={styles.sidebar}>
            <Rows gap={10} rows={["auto"]}>
                <Search placeholder="Поиск чатов" />
                <Filter
                    isSelect={filter}
                    setIsSelect={setFilter}
                    data={["Сообщения", "Звонки"]}
                    width="100%"
                />
                {filter === "Сообщения" ? (
                    <ChatList
                        uuid={uuid}
                        selectChat={selectChat}
                        setUserId={setUserId}
                        setChatId={setChatId}
                    />
                ) : null}
            </Rows>
        </div>
    );
};
