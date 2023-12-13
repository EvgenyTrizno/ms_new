import { MainText } from "@/shared/ui/MainText";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { FC } from "react";

export const TimeOnSite: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0}>
                    <MainText text="Время проведенное на сайте" />
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
