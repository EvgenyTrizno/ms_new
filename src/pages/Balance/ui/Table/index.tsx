import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { ColName } from "../ColName";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { NoteStatus } from "../NoteStatus";
import { AboutUser } from "../AboutUser";
import { formatNumberToCurrensy } from "@/shared/lib/helpers/formatNumberToCurrensy";

import arrow from "../../assets/arrow-bottom.svg";
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
                    <Cols
                        type="custom"
                        gap={0}
                        cols={["repeat(4, 1fr)", "164px"]}
                        className={styles.tableContent}
                    >
                        <AboutUser />
                        <NoteStatus status="Не подтверждена" />
                        <Text type="h2" fz="36px">
                            3
                        </Text>
                        <span className={styles.time}>24</span>
                        <div className={styles.drop}>
                            <Text type="h2" fz="36px">
                                {formatNumberToCurrensy(55)}
                            </Text>
                            <img src={arrow} alt="" />
                        </div>
                    </Cols>
                </WhiteContentBlock>
            </Rows>
        </div>
    );
};
