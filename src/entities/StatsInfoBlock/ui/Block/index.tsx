import { FC } from "react";
import { IBlockProps } from "./types";

import { Cols } from "@/shared/ui/Cols";
import { MainText } from "@/shared/ui/MainText";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";

export const StatusInfo: FC<IBlockProps> = ({ name, content }) => {
    return (
        <WhiteContentBlock>
            <Rows gap={12} rows={["auto"]}>
                <MainText text={name} />
                <Cols type="auto" count={2} gap={8}>
                    {content}
                </Cols>
            </Rows>
        </WhiteContentBlock>
    );
};
