import { FC } from "react";
import { ITextWithNumberProps } from "./types";

import { Text } from "@/shared/ui/Text";

export const TextWithNumber: FC<ITextWithNumberProps> = ({ number }) => {
    return (
        <Text type="p" fz="14px" position="center">
            Введите код, который был отправлен вам на номер {number}. Никому не
            сообщайте код.
        </Text>
    );
};
