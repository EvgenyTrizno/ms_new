import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const AddresData: FC = () => {
    return (
        <Rows gap={8} rows={["auto"]}>
            <Text type="p" fw={400} fz="14px">
                Страна
            </Text>
            <Text type="p" fw={400} fz="14px">
                Город
            </Text>
            <Text type="p" fw={400} fz="14px">
                Адресс
            </Text>
        </Rows>
    );
};
