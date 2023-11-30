import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { AddresData } from "../AddresData";
import { BlueBox } from "@/shared/ui/BlueBox";

import photo from "../../assets/photo.jpg";
import styles from "./styles.module.scss";

export const ClinicCard: FC = () => {
    return (
        <BlueBox style={{ backgroundColor: "#fff" }}>
            <Row gap={12} className={styles.card}>
                <Image
                    style={{ width: 92 }}
                    src={photo}
                    alt=""
                    width={92}
                    height={92}
                />
                <Rows gap={8} rows={["auto"]}>
                    <Text type="h4" fz="16px">
                        Название клиники
                    </Text>
                    <AddresData />
                </Rows>
            </Row>
        </BlueBox>
    );
};
