import { FC } from "react";
import { INoteBlockProps } from "./types";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Cols } from "@/shared/ui/Cols";
import { Row } from "@/shared/ui/Row";
import { DateBlock } from "./ui/DateBlock";

import styles from "./styles.module.scss";
import { useAuth } from "@/shared/model/store/auth";

export const MedicalBlock: FC<INoteBlockProps> = ({ onClick }) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <WhiteContentBlock
            className={
                // sick ? `${styles.medical} ${styles.medicalRed}` : styles.medical
                sick ? styles.medicalRed : styles.medical
            }
            onClick={onClick}
        >
            <Cols
                gap={24}
                className={styles.content}
                cols={["1fr", "133px"]}
                type="custom"
            >
                <Rows gap={24} rows={["auto"]}>
                    <Rows gap={8} rows={["auto"]}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Название записи
                        </Text>
                        <Text type="h2" fz="18px">
                            Проверка мышц
                        </Text>
                    </Rows>
                    <Rows gap={8} rows={["auto"]}>
                        <Row gap={0}>
                            <Text color="#7D7F82" fz="12px" type="p">
                                Формат:
                            </Text>
                            &nbsp;
                            <Text color="#00CC5E" fz="12px" type="p">
                                Онлайн
                            </Text>
                        </Row>
                        <Row gap={0}>
                            <Text fz="12px" type="p" color="#7D7F82">
                                Центр:
                            </Text>
                            &nbsp;
                            <Text fz="12px" type="p">
                                Московский центр
                            </Text>
                        </Row>
                        <Row gap={0}>
                            <Text color="#7D7F82" fz="12px" type="p">
                                Врач:
                            </Text>
                            &nbsp;
                            <Text fz="12px" type="p">
                                Невролог И.И
                            </Text>
                        </Row>
                    </Rows>
                </Rows>
                <DateBlock />
            </Cols>
        </WhiteContentBlock>
    );
};
