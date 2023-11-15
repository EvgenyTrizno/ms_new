import { FC } from "react";

import { WhiteContentBlock } from "../../../../shared/ui/WhiteContentBlock";
import { Text } from "../../../../shared/ui/Text";
import { Rows } from "../../../../shared/ui/Rows";
import { Row } from "../../../../shared/ui/Row";
import { Avatar } from "../../../../shared/ui/Avatar";
import { Rating } from "@/features/Rating";

import styles from "./styles.module.scss";

export const SearchResult: FC = () => {
    return (
        <WhiteContentBlock className={styles.result}>
            <Rows gap={30} rows={["auto"]}>
                <Row gap={15}>
                    <Avatar type="user" size="XL" img="" />
                    <Rows gap={16} rows={["auto"]}>
                        <Text type="h3" fz="18px">
                            Яковенко Алина Сергеевна
                        </Text>
                        <Row gap={3}>
                            <Text type="p" fz="14px" color="#7D7F82">
                                Дата рождения:
                            </Text>
                            <Text type="p" fz="14px">
                                02.01.2022
                            </Text>
                        </Row>
                        <Row gap={3}>
                            <Text type="p" fz="14px" color="#7D7F82">
                                Специальность:
                            </Text>
                            <Text type="p" fz="14px">
                                Уролог
                            </Text>
                        </Row>
                        <Row gap={3}>
                            <Text type="p" fz="14px" color="#7D7F82">
                                Опыт работы:
                            </Text>
                            <Text type="p" fz="14px">
                                1.5 год
                            </Text>
                        </Row>
                    </Rows>
                </Row>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Rating
                        gap="4px"
                        width="24px"
                        height="24px"
                        defaultValue={5}
                        disabled
                    />
                    <Text fz="14px" type="p" color="#7D7F82">
                        Россия, Москва
                    </Text>
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
