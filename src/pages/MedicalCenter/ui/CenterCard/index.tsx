import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Line } from "@/shared/ui/Line";

import more from "../../assets/more.svg";
import styles from "./styles.module.scss";
import { LAPTOP, PC } from "@/shared/utils";

export const CenterCard: FC = () => {
    return (
        <BlueBox className={styles.card}>
            <Row
                gap={12}
                style={{ alignItems: "flex-start", marginBottom: 16 }}
            >
                <Image src="" alt="" className={styles.avatar} />
                <Rows gap={6} rows={["auto"]}>
                    <Text type="h4" fz="16px">
                        Название центра
                    </Text>
                    <Row gap={0}>
                        <Text type="p" fz="12px" color="#7D7F82">
                            Колличество специалистов:
                        </Text>
                        &nbsp;
                        <Text type="p" fz="12px">
                            23
                        </Text>
                    </Row>
                </Rows>
                {(PC || LAPTOP) && <Image src={more} alt="" />}
            </Row>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Требуется:
                    </Text>
                    <Text type="p" fz="12px">
                        Доп. расшифровка анализов
                    </Text>
                </Row>
                <Row gap={0}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Помощь в лечении:
                    </Text>
                    <Text type="p" fz="12px">
                        23%
                    </Text>
                </Row>
                <Row gap={0}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Средняя точность:
                    </Text>
                    <Text type="p" fz="12px">
                        34%
                    </Text>
                </Row>
                <Row gap={0}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Ответственность:
                    </Text>
                    <Text type="p" fz="12px">
                        62%
                    </Text>
                </Row>
                <Row gap={0}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Изученные заболевания:
                    </Text>
                    <Text type="p" fz="12px">
                        12
                    </Text>
                </Row>
            </Rows>
            <Line height="2px" style={{ margin: "12px 0" }} />
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Rows gap={0} rows={["auto"]}>
                    <Text type="p" fz="11px" color="#7D7F82">
                        Дата добавления:
                    </Text>
                    <Text type="p" fz="11px">
                        12/02/2004
                    </Text>
                </Rows>
                <Rows gap={0} rows={["auto"]}>
                    <Text type="p" fz="11px" color="#7D7F82">
                        Период добавления:
                    </Text>
                    <Text type="p" fz="11px">
                        22/02/2004 (20 дней)
                    </Text>
                </Rows>
            </Row>
        </BlueBox>
    );
};
