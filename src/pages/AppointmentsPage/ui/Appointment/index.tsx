import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Image } from "@/shared/ui/Image";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import photo from "../../assets/photo.png";
import styles from "./styles.module.scss";

export const Appointment: FC = () => {
    const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
    });

    return (
        <WhiteContentBlock className={styles.appointment}>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={16}>
                    <Image src={photo} alt={""} className={styles.avatar} />
                    <Rows gap={8} rows={["auto"]}>
                        <Text type="p">Наименование товара</Text>
                        <Text type="h4" fz="16px">
                            {formatter.format(272)}
                        </Text>
                        <Row gap={0}>
                            <Text type="p" color="#3c3c4399" fz="14px">
                                Выписан:
                            </Text>
                            &nbsp;
                            <Text type="p" fz="14px">
                                Dr. Zain Philips
                            </Text>
                        </Row>
                        <Text type="p" fz="14px" color="#00CC5E">
                            Есть в наличии
                        </Text>
                    </Rows>
                </Row>
                <Row gap={16} style={{ justifyContent: "center" }}>
                    <Text type="p" fz="14px" color="#0064FA">
                        Сохранить
                    </Text>
                    <Text type="p" fz="14px" color="#0064FA">
                        Поделиться
                    </Text>
                    <Text type="p" fz="14px" color="#D64657">
                        Удалить
                    </Text>
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
