import { FC, useState } from "react";

import { Cols } from "@/shared/ui/Cols";
import { AboutUser } from "../AboutUser";
import { formatNumberToCurrensy } from "@/shared/lib/helpers/formatNumberToCurrensy";
import { NoteStatus } from "../NoteStatus";
import { Text } from "@/shared/ui/Text";

import arrow from "../../assets/arrow-bottom.svg";
import styles from "./styles.module.scss";
import { Rows } from "@/shared/ui/Rows";
import { NoteOpen } from "../NoteOpen";

export const Note: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Rows gap={16} rows={["auto"]}>
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
                    <img
                        src={arrow}
                        alt=""
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                </div>
            </Cols>
            {isOpen && <NoteOpen />}
        </Rows>
    );
};
