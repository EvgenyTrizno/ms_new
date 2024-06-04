import { FC, useState, useEffect, ChangeEvent } from "react";

import { Search } from "@/features/Search";
import { Filter } from "@/shared/ui/Filter";
import { ChatList } from "../ChatList";
import { FilterBtn } from "@/shared/ui/FilterBtn";

import styles from "./styles.module.scss";
import { MOBILE, TABLET } from "@/shared/utils";

export const ChatSidebar: FC = () => {
    const [filter, setFilter] = useState("Сообщения");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const extraBtn = document.querySelector("#extraBtn") as HTMLElement;

        extraBtn && !MOBILE && !TABLET && (extraBtn.style.display = "none");

        return () => {
            extraBtn && (extraBtn.style.display = "block");
        };
    }, []);

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.inner}>
                <Search
                    height="48px"
                    placeholder="Поиск чатов"
                    onChange={onChangeSearch}
                    value={search}
                    showSearchByScroll={false}
                    additionalBlock={
                        <FilterBtn type="small" onClick={() => console.log("click")} />
                    }
                />

                <Filter
                    isSelect={filter}
                    setIsSelect={setFilter}
                    data={["Сообщения", "Звонки"]}
                />

                <ChatList search={search} />
            </div>
        </div>
    );
};
