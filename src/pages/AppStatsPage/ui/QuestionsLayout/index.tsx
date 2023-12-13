import { FC } from "react";
import { IQuestionsLayoutProps } from "./types";

import { MainText } from "@/shared/ui/MainText";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";

export const QuestionsLayout: FC<IQuestionsLayoutProps> = ({
    text,
    questions,
}) => {
    return (
        <WhiteContentBlock>
            <MainText text={text} />
            <Rows gap={8} rows={["auto"]} style={{ marginTop: 12 }}>
                {questions}
            </Rows>
        </WhiteContentBlock>
    );
};
