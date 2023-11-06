import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { IConfirmTextProps } from "./types";

export const ConfirmText: FC<IConfirmTextProps> = ({ type }) => {
    return (
        <Text type="p" fz="14px">
            Введите код который был отправлен вам на
            {type === "tel" ? "номер" : "почту"}, для восстановления доступа к
            аккаунту.
        </Text>
    );
};
