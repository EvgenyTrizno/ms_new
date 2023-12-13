import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText";
import { Text } from "@/shared/ui/Text";
import { formatNumberToCurrensy } from "@/shared/lib/helpers/formatNumberToCurrensy";

import styles from "./styles.module.scss";

export const Stats: FC = () => {
    return (
        <Cols gap={10} type="auto" count={3}>
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <MainText text="Баланс в приложении" />
                    <Text type="h2" fz="36px">
                        {formatNumberToCurrensy(0)}
                    </Text>
                </Rows>
            </WhiteContentBlock>
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <MainText text="Все транзакции на карту" />
                    <Text type="h2" fz="36px">
                        {formatNumberToCurrensy(0)}
                    </Text>
                </Rows>
            </WhiteContentBlock>
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <MainText text="Лечилось" />
                    <span className={styles.people}>0</span>
                </Rows>
            </WhiteContentBlock>
        </Cols>
    );
};
