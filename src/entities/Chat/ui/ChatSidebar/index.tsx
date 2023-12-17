import { FC, useState, useEffect } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Search } from "@/features/Search";
import { Filter } from "@/shared/ui/Filter";
import { ChatList } from "../ChatList";
import { Row } from "@/shared/ui/Row";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { useAuth } from "@/shared/model/store/auth";
import { FiltersList } from "../FiltersList";

import styles from "./styles.module.scss";
import { MOBILE, TABLET } from "@/shared/utils";

export const ChatSidebar: FC = () => {
    const [filter, setFilter] = useState("Сообщения");
    const [search, setSearch] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { user } = useAuth();

    useEffect(() => {
        const extraBtn = document.querySelector("#extraBtn") as HTMLElement;

        extraBtn && !MOBILE && !TABLET && (extraBtn.style.display = "none");

        return () => {
            extraBtn && (extraBtn.style.display = "block");
        };
    }, []);

    return (
        <div className={styles.sidebar}>
            <Rows gap={10} rows={["auto"]}>
                <Row gap={6}>
                    <Search
                        placeholder="Поиск чатов"
                        onChange={(e) =>
                            setSearch((e && e.target.value) as string)
                        }
                    />
                    {user && user.group.name === "Врачи" && (
                        <FilterBtn
                            isActive={isOpen}
                            type="small"
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                    )}
                </Row>
                {isOpen && <FiltersList />}
                <Filter
                    isSelect={filter}
                    setIsSelect={setFilter}
                    data={["Сообщения", "Звонки"]}
                    width="100%"
                />
                {filter === "Сообщения" ? <ChatList search={search} /> : null}
            </Rows>
        </div>
    );
};
