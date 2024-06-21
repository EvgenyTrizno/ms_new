import { FC, useEffect, useState } from "react";

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

export const SearchWithFilter: FC = () => {
    const [showSearch, setShowSearch] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (showSearch) return;
    //
    //         setShowSearch(true);
    //     };
    //
    //     window.addEventListener("scroll", handleScroll, true);
    //
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [showSearch]);
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
