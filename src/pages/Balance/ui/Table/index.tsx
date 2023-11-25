import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { ColName } from "../ColName";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Note } from "../Note";

import styles from "./styles.module.scss";

export const Table: FC = () => {
    return (
        <div className={styles.table}>
            <Cols
                type="custom"
                gap={0}
                cols={["repeat(4, 1fr)", "164px"]}
                className={styles.tableHeader}
            >
                <ColName name="Имя Фамилия" />
                <ColName name="Запись" />
                <ColName name="Этапы выполнения" />
                <ColName name="Время на выполнение" />
                <ColName name="Бонус" />
            </Cols>
            <Rows gap={8} rows={["auto"]}>
                <WhiteContentBlock className={styles.tableItem}>
                    <Note />
                </WhiteContentBlock>
            </Rows>
        </div>
    );
};
