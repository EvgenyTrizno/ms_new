import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { MainText } from "@/shared/ui/MainText";
import { Rows } from "@/shared/ui/Rows";
import { Payment } from "../Payment";

export const Payments: FC = () => {
    return (
        <WhiteContentBlock>
            <MainText text="Выплаты" />
            <Rows gap={16} rows={["auto"]} style={{ marginTop: 14 }}>
                <Payment />
                <Payment />
                <Payment />
            </Rows>
        </WhiteContentBlock>
    );
};
