import { Avatar } from "@/shared/ui/Avatar";
import { Cols } from "@/shared/ui/Cols";
import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { MainText } from "@/shared/ui/MainText";
import { Text } from "@/shared/ui/Text";
import { Rows } from "@/shared/ui/Rows";
import { IInfoCardProps } from "./types";

export const InfoCard: FC<IInfoCardProps> = ({ type, name, rank }) => {
    return (
        <WhiteContentBlock style={{ borderRadius: 15 }}>
            <Cols gap={20} type="custom" cols={["120px", "1fr"]}>
                <Avatar type="custom" size={120} img="" />
                <div>
                    <Row
                        gap={0}
                        style={{
                            justifyContent: "space-between",
                            marginBottom: 16,
                        }}
                    >
                        <MainText text={name} />
                        <Text type="p" fz="14px" color="#0064FA">
                            {rank}
                        </Text>
                    </Row>
                    {type === "center" ? (
                        <Rows gap={12} rows={["auto"]}>
                            <Rows gap={0} rows={["auto"]}>
                                <Text type="h5" fz="15px">
                                    Направление
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    Общий медицинский центр
                                </Text>
                            </Rows>
                            <Rows gap={0} rows={["auto"]}>
                                <Text type="h5" fz="15px">
                                    Местоположение
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    Самара, Российская Федерация
                                </Text>
                            </Rows>
                            <Rows gap={0} rows={["auto"]}>
                                <Text type="h5" fz="15px">
                                    Номер телефона
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    +7-(900)-000-00-00
                                </Text>
                            </Rows>
                        </Rows>
                    ) : (
                        <Cols type="auto" count={2} gap={20}>
                            <Rows gap={12} rows={["auto"]}>
                                <Rows gap={0} rows={["auto"]}>
                                    <Text type="h5" fz="15px">
                                        Должность
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        Врач-хирург
                                    </Text>
                                </Rows>
                                <Rows gap={0} rows={["auto"]}>
                                    <Text type="h5" fz="15px">
                                        Местоположение
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        Самара, Российская Федерация
                                    </Text>
                                </Rows>
                                <Rows gap={0} rows={["auto"]}>
                                    <Text type="h5" fz="15px">
                                        Опыт работы
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        23 года
                                    </Text>
                                </Rows>
                            </Rows>
                            <Rows gap={12} rows={["max-width"]}>
                                <Rows gap={0} rows={["auto"]}>
                                    <Text type="h5" fz="15px">
                                        Дата рождения
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        23.07.1987
                                    </Text>
                                </Rows>
                                <Rows gap={0} rows={["max-content"]}>
                                    <Text type="h5" fz="15px">
                                        Номер телефона
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        +7-(900)-000-00-00
                                    </Text>
                                </Rows>
                            </Rows>
                        </Cols>
                    )}
                    <Text
                        type="p"
                        color="#B1B2B4"
                        position="end"
                        fz="12px"
                        style={{ width: "100%" }}
                    >
                        Зарегистрирован(-а) с 23 мая 2017
                    </Text>
                </div>
            </Cols>
        </WhiteContentBlock>
    );
};
