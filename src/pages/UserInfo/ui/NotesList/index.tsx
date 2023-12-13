import { FC } from "react";
import { INotesList } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Cols } from "@/shared/ui/Cols";
import { Missing } from "../Missing";
import { Current } from "../Current";
import { Unmounted } from "../Unmounted";
import { Row } from "@/shared/ui/Row";
import { InfoText } from "@/shared/ui/InfoText";
import { MOBILE, TABLET } from "@/shared/utils";

export const NotesList: FC<INotesList> = ({ missing, current, umounted }) => {
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
            <Cols gap={10} count={MOBILE || TABLET ? 1 : 3} type="auto">
                <Missing missing={missing} />
                <Current current={current} />
                <Unmounted umounted={umounted} />
            </Cols>
        </WhiteContentBlock>
    );
};
