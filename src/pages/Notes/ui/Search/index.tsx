import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { Search } from "@/features/Search";
import { Btn } from "@/shared/ui/Btn";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";

import icon from "./assets/add-circle.svg";
import styles from "./styles.module.scss";
import { MOBILE, TABLET } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Filter } from "@/shared/ui/Filter";
import { PlusBtn } from "@/shared/ui/PlusBtn";

type SearchWithFProps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchWithFilter: FC<SearchWithFProps> = ({ search, setSearch }) => {
    const [showSearch, setShowSearch] = useState(false);

    const [filter, setFilter] = useState("Сообщения");

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
        <>
            <Search
                height="48px"
                placeholder="Введите запрос"
                onChange={onChangeSearch}
                value={search}
                showSearchByScroll={false}
                additionalBlock={
                    <PlusBtn onClick={() => console.log("click")} />
                } />

        </>
    );
};
