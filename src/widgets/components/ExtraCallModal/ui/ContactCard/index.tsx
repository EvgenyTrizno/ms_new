import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Avatar } from "@/shared/ui/Avatar";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { Rows } from "@/shared/ui/Rows";

export const ContactCard: FC = () => {
    return (
        <WhiteContentBlock className={styles.card}>
            <Avatar
                type="custom"
                size={124}
                img=""
                style={{ margin: "0 auto" }}
            />
            <div className={styles.data}>
                <Text type="h5">Иванова Светлана Васильевна</Text>
                <Rows gap={8} rows={["auto"]}>
                    <Text type="p" color="#3C3C4399">
                        12 декабря 1999
                    </Text>
                    <Text type="p" color="#3C3C4399">
                        Ташкент, Узбекистан
                    </Text>
                </Rows>
            </div>
            <Btn color="#0064FA">Связаться</Btn>
        </WhiteContentBlock>
    );
};
