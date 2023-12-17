import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { useAuth } from "@/shared/model/store/auth";

import calendar from "./assets/calendar.svg";
import alarm from "./assets/alarm-clock.svg";
import clock from "./assets/clock-fast-forward.svg";
import styles from "./styles.module.scss";

export const NoteBlock: FC = () => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <WhiteContentBlock className={`${styles.note} ${sick && styles.sick}`}>
            <Rows gap={20} rows={["auto"]}>
                <Rows gap={7} rows={["auto", "auto"]}>
                    <Text type="p" color="#9B9B9B" fz="12px">
                        Название записи
                    </Text>
                    <Text type="h2" color="#000" fz="17px">
                        Восстановление
                    </Text>
                </Rows>
                <Rows gap={10} rows={["auto"]}>
                    <Row gap={10}>
                        <Text type="p" color="#B1B2B4" fz="12px">
                            Формат:
                        </Text>
                        <Text type="p" color="#00CC5E" fz="12px">
                            Online
                        </Text>
                    </Row>
                    <Row gap={10}>
                        <Text type="p" color="#B1B2B4" fz="12px">
                            Заболевание:
                        </Text>
                        <Text type="p" fz="12px">
                            Работа мышц спины
                        </Text>
                    </Row>
                    <Row gap={10}>
                        <Text type="p" color="#B1B2B4" fz="12px">
                            Создана:
                        </Text>
                        <Text
                            type="p"
                            fz="12px"
                        >{`${"Неврологом И.И. (Московский центр)".slice(
                            0,
                            25
                        )}...`}</Text>
                    </Row>
                    <Row gap={10}>
                        <Text type="p" color="#B1B2B4" fz="12px">
                            Версия:
                        </Text>
                        <Text type="p" fz="12px">
                            USA
                        </Text>
                    </Row>
                </Rows>
                <div className={styles.line}></div>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Row gap={6}>
                        <Image src={calendar} alt="" width={20} height={20} />
                        <Text type="p" fz="12px">
                            21 Декабря
                        </Text>
                    </Row>
                    <Row gap={6}>
                        <Image src={alarm} alt="" width={20} height={20} />
                        <Text type="p" fz="12px">
                            14:45
                        </Text>
                    </Row>
                    <Row gap={6}>
                        <Image src={clock} alt="" width={20} height={20} />
                        <Text type="p" fz="12px">
                            40 минут
                        </Text>
                    </Row>
                </Row>
                <Text type="p" fz="12px" position="center">
                    Доступно в групповом чате
                </Text>
            </Rows>
        </WhiteContentBlock>
    );
};
