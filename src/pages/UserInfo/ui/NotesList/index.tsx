import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Cols } from "@/shared/ui/Cols";
import { Missing } from "../Missing";
import { Current } from "../Current";
import { Unmounted } from "../Unmounted";
import { Row } from "@/shared/ui/Row";
import { InfoText } from "@/shared/ui/InfoText";

export const NotesList: FC = () => {
    return (
        <WhiteContentBlock>
            <Row
                gap={0}
                style={{ justifyContent: "space-between", marginBottom: 10 }}
            >
                <Text type="h5" fz="16px">
                    Записи
                </Text>
                <InfoText text="Все записи" />
            </Row>
            <Cols gap={10} count={3} type="auto">
                <Missing />
                <Current />
                <Unmounted />
            </Cols>
        </WhiteContentBlock>
    );
};
