import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Image } from "@/shared/ui/Image";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { Btn } from "@/shared/ui/Btn";
import { IMedicalCenterViewProps } from "./types";

import styles from "./styles.module.scss";
import { LAPTOP } from "@/shared/utils";

export const Layout: FC<IMedicalCenterViewProps> = ({
    img,
    date,
    verify,
    contact,
    report,
}) => {
    return (
        <WhiteContentBlock>
            <Rows gap={16} rows={["auto"]}>
                <Image className={styles.avatar} src={img} alt="" />
                <Rows gap={5} rows={["auto"]}>
                    <Text type="h4" fz={LAPTOP ? "15px" : "18px"}>
                        Начал работу с {date}
                    </Text>
                    {verify && (
                        <Row gap={5}>
                            <Text type="p" color="#3C3D3E" fz="14px">
                                Контракт подписан
                            </Text>
                        </Row>
                    )}
                </Rows>
                <Row gap={LAPTOP ? 4 : 8}>
                    <Btn color="#0064FA" onClick={contact}>
                        Связаться
                    </Btn>
                    <Btn color="#D64657" onClick={report}>
                        Пожаловаться
                    </Btn>
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
