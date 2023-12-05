import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { InfoText } from "@/shared/ui/InfoText";
import { Avatar } from "@/shared/ui/Avatar";

import styles from "./styles.module.scss";

export const UserReport: FC = () => {
    return (
        <Rows
            gap={0}
            style={{ justifyContent: "space-between" }}
            rows={["auto"]}
            className={styles.report}
        >
            <Row gap={10}>
                <Avatar type="custom" size={70} img="" />
                <div>
                    <Text type="h4" fz="15px" style={{ marginBottom: 6 }}>
                        Егорова Светлана Юрьевна
                    </Text>
                    <Rows gap={2} rows={["auto"]}>
                        <Row gap={5}>
                            <Text type="h5" fz="14px">
                                Запись:
                            </Text>
                            <Text type="p" fz="14px" color="#3C3D3E">
                                Гастроэнтеролог
                            </Text>
                        </Row>
                        <Text type="p" fz="14px" color="#3C3D3E">
                            Ковалева Елена Владимировна
                        </Text>
                        <Row gap={5}>
                            <Text type="h5" fz="14px">
                                Дата:
                            </Text>
                            <Text type="p" fz="14px" color="#3C3D3E">
                                17.06.23
                            </Text>
                        </Row>
                    </Rows>
                </div>
            </Row>
            <Text type="p" style={{ marginTop: 20 }}>
                Врач был некомпетентным!
            </Text>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Text type="p" color="#7D7F82">
                    Ташкент
                </Text>
                <InfoText text="Подробнее" />
            </Row>
        </Rows>
    );
};
