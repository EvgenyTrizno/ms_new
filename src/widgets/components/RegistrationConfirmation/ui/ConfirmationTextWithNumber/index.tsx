import { FC } from "react";
import { IConfirmationTextWithNumberProps } from "./types";

import { Text } from "@/shared/ui/Text";

export const ConfirmationTextWithNumber: FC<
    IConfirmationTextWithNumberProps
> = ({ number }) => {
    return (
        <Text type="p" fz="14px" position="center" color="#262626">
            Введите код, который был отправлен вам на номер
            <br />
            {number} Никому не сообщайте код.
        </Text>
    );
};
