import { FC } from "react";

import { Image } from "@/shared/ui/Image";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";

import image from "./assets/image.jpg";
import star from "./assets/star.svg";
import styles from "./styles.module.scss";

export const ResultBlock: FC = () => {
    return (
        <div className={styles.card}>
            <Image src={image} alt="" className={styles.image} />
            <Rows gap={8} rows={["auto"]}>
                <Rows gap={2} rows={["auto"]}>
                    <Text fz="16px" type="h5" color="#0064FA">
                        Академия здоровья
                    </Text>
                    <Text fz="14px" type="p" color="#7D7F82">
                        Медцентр, клиника, оздоровительный центр, реабилитация
                    </Text>
                </Rows>
                <Text fz="14px" type="p">
                    Ул. Пушкина 143
                </Text>
                <Row gap={0}>
                    <Text fz="14px" type="p" color="#7D7F82">
                        График работы: &nbsp;
                    </Text>
                    <Text fz="14px" type="p">
                        08:00 - 21:00 ПН-ПТ
                    </Text>
                </Row>
                <Row gap={8}>
                    <Row gap={4}>
                        <Image src={star} alt="" />
                        <Text type="p" fz="14px">
                            4.8
                        </Text>
                    </Row>
                    <Text type="p" fz="14px" color="#7D7F82">
                        161 оценок
                    </Text>
                </Row>
            </Rows>
        </div>
    );
};
