import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { MainText } from "@/shared/ui/MainText";
import { InfoText } from "@/shared/ui/InfoText";

export const Char: FC = () => {
    return (
        <WhiteContentBlock style={{ height: 500 }}>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <MainText text="График посещений" />
                    <InfoText text="Подробнее" />
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
