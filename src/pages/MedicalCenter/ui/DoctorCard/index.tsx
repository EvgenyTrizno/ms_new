import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { UserRank } from "@/entities/User";
import { MOBILE } from "@/shared/utils";

import styles from "./styles.module.scss";

export const DoctorCard: FC = () => {
    return (
        <BlueBox className={styles.card}>
            <Row gap={12}>
                <Avatar type="custom" size={MOBILE ? 70 : 96} img="" />
                <Rows gap={4} rows={["auto"]}>
                    <Text type="h4" fz="16px">
                        Зайцева Елена Юрьевна
                    </Text>
                    <UserRank rank="Невролог" />
                </Rows>
            </Row>
        </BlueBox>
    );
};
