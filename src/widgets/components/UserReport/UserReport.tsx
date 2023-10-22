import { FC } from "react";

import { Row } from "../Row/Row";
import { Rows } from "../Rows/Rows";
import { Text } from "@/shared";

import woman from "/assets/woman.jpg";
import styles from "./UserReport.module.scss";
import { InfoText } from "../InfoText/InfoText";

export const UserReport: FC = () => {
    return (
        <div className={styles.report}>
            <div>
                <Row gap={10}>
                    <img src={woman} alt="" className={styles.avatar} />
                    <Rows gap={8} rows={["auto", "auto"]}>
                        <Text type="h4">Егорова Светлана Юрьевна</Text>
                        <Rows gap={3} rows={["auto", "auto", "auto"]}>
                            <Row gap={0}>
                                <Text type="h5" fz="14px">
                                    Запись:
                                </Text>
                                &nbsp;
                                <Text type="p" fz="14px">
                                    Гастроэнтеролог
                                </Text>
                            </Row>
                            <Text type="p" fz="14px">
                                Ковалева Елена Владимировна
                            </Text>
                            <Row gap={0}>
                                <Text type="h5" fz="14px">
                                    Дата:
                                </Text>
                                &nbsp;
                                <Text type="p" fz="14px">
                                    17.06.23
                                </Text>
                            </Row>
                        </Rows>
                    </Rows>
                </Row>
                <div className={styles.reason}>
                    <Text type="p">Врач не пришел на прием!</Text>
                </div>
            </div>

            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Text type="p" fz="14px" color="#7D7F82">
                    Ташкент
                </Text>
                <InfoText text="Подробнее" />
            </Row>
        </div>
    );
};
