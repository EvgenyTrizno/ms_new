import { FC } from "react";
import { IMedicalCenterLayout } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const Layout: FC<IMedicalCenterLayout> = ({
    text,
    btn,
    name,
    type,
    country,
    street,
    number,
    peoples,
}) => {
    return (
        <WhiteContentBlock
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Rows gap={12} rows={["auto"]}>
                <Text type="h4" fz="18px">
                    {name}
                </Text>
                <Rows gap={4} rows={["auto"]}>
                    <Text type="h6" fz="14px">
                        {text}
                    </Text>
                    <Text type="p" fz="14px" color="#3C3D3E">
                        {type}
                    </Text>
                </Rows>
                <Rows gap={4} rows={["auto"]}>
                    <Text type="h6" fz="14px">
                        Адрес
                    </Text>
                    <Text type="p" fz="14px" color="#3C3D3E">
                        {country}
                    </Text>
                    <Text type="p" fz="12px" color="#7D7F82">
                        {street}
                    </Text>
                </Rows>
                <Rows gap={4} rows={["auto"]}>
                    <Text type="h6" fz="14px">
                        Номер телефона
                    </Text>
                    <Text type="p" fz="14px" color="#3C3D3E">
                        {number}
                    </Text>
                </Rows>
                <Rows gap={4} rows={["auto"]}>
                    <Text type="h6" fz="14px">
                        Количество персонала
                    </Text>
                    <Text type="p" fz="14px" color="#3C3D3E">
                        {peoples}
                    </Text>
                </Rows>
                <Rows gap={4} rows={["auto"]}>
                    <Text type="h6" fz="14px">
                        Не указано в заполнении профиля
                    </Text>
                    <Text type="p" fz="14px" color="#3C3D3E">
                        79 человек
                    </Text>
                </Rows>
            </Rows>
            <Rows gap={8} rows={["auto"]}>
                <Text type="h6" fz="14px">
                    Какие болезни обслуживаются
                </Text>
                {btn}
            </Rows>
        </WhiteContentBlock>
    );
};
