import { FC, useState, useEffect, ChangeEvent } from "react";

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

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <Search
          placeholder="Поиск чатов"
          height="48px"
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
