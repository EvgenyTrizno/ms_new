import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Disease } from "../Disease";

import styles from "./styles.module.scss";
import { Btn } from "@/shared/ui/Btn";
import { MOBILE, TABLET } from "@/shared/utils";

export const MedicalHistory: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows
                gap={12}
                rows={["auto"]}
                style={{ justifyContent: "space-between", height: "100%" }}
            >
                <Text type="h5" fz="16px">
                    История болезней
                    {!MOBILE &&
                        !TABLET &&
                        "/ 15 раз за 13/10/2023 по 13/12/2023"}
                </Text>
                <div className={styles.diseases}>
                    <Disease />
                    <Disease />
                    <Disease />
                    <Disease />
                    <Disease />
                    <Disease />
                    <Disease />
                </div>
                <Btn color="#0064FA">Вся история болезней</Btn>
            </Rows>
        </WhiteContentBlock>
    );
};
