import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";

import icon from "./assets/icon.svg";
import styles from "./styles.module.scss";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { InfoText } from "@/shared/ui/InfoText";

export const Disease: FC = () => {
    return (
        <Row gap={12}>
            <div className={styles.circle}>
                <Image src={icon} alt="" width={17} height={17} />
            </div>
            <Rows gap={3} rows={["auto"]}>
                <Text type="h2" fz="15px">
                    Грипп
                </Text>
                <Text type="p" fz="14px">
                    17 февраля 2023
                </Text>
                <InfoText text="Подробнее" />
            </Rows>
        </Row>
    );
};
