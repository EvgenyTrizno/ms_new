import { FC } from "react";

import { Text } from "@/shared";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";

interface ITextProps {
    text: string;
}

export const MainText: FC<ITextProps> = ({ text }) => {
    return (
        <Text type="h2" fz={LAPTOP ? "17px" : SMALL_LAPTOP ? "15px" : "18px"}>
            {text}
        </Text>
    );
};
