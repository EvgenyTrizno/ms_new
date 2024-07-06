import { CustomMobileHeader } from "@/widgets";
import { Layout } from "../Layout";
import { MOBILE } from "@/shared/utils";
import styles from "./styles.module.scss";
import { Container } from "@/shared/ui/Container";
import { Filter } from "@/shared/ui/Filter";
import { useState } from "react";
import { MedTask, NoteBlock } from "@/entities";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Search } from "@/features/Search";
import { useNotesQuery } from "@/shared/lib/hooks/useNotesQuery";

const HistoryPatientPage = () => {
    const [filter, setFilter] = useState("Записи");
    const { data } = useNotesQuery();
    const [search, setSearch] = useState("");

    return (
        <Layout>
            {MOBILE && <CustomMobileHeader back text="История пациента" />}

            <div className={styles.searchWrapper}>
                <Search className={styles.search}
                    placeholder="Введите запрос"
                    height="48px"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    showSearchByScroll={false}
                />
                {MOBILE && (
                    <FilterBtn type="small" onClick={() => console.log("click")} />
                )}
            </div>
            <Filter
                isSelect={filter}
                setIsSelect={setFilter}
                data={["Записи", "Опрос", "Клиники", "Врачи"]}
                width="100%"
            />
            <div className={styles.contentWrapper}>


                {data?.data
                    .filter((el) =>
                        Object.values(el).some((value) => {
                            if (typeof value === "string") {
                                return value.toLowerCase().includes(search.toLowerCase());
                            }
                        })
                    )
                    .map((el) => {
                        return (
                            <NoteBlock
                                key={el.id}
                                data={el}
                            />
                        );
                    })}
            </div>
        </Layout >
    );
};

export default HistoryPatientPage;
