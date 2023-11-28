import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Rows } from "@/shared/ui/Rows";
import { Image } from "@/shared/ui/Image";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import photo from "../../assets/photo.jpg";
import more from "../../assets/more.svg";
import download from "../../assets/download.svg";

import styles from "./styles.module.scss";

export const File: FC = () => {
    return (
        <BlueBox className={styles.card}>
            <Rows gap={12} rows={["auto"]}>
                <Row
                    gap={0}
                    style={{
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                >
                    <Image src={photo} alt="" width={64} height={64} />
                    <Image src={more} alt="" />
                </Row>
                <Row gap={12} style={{ alignItems: "flex-end" }}>
                    <Rows gap={4} rows={["auto"]} style={{ width: "100%" }}>
                        <Text type="h5" fz="16px">
                            file_001.img
                        </Text>
                        <Text type="p" fz="14px" color="#B1B2B4">
                            124 КБ
                        </Text>
                    </Rows>
                    <Image src={download} alt="" />
                </Row>
            </Rows>
        </BlueBox>
    );
};
