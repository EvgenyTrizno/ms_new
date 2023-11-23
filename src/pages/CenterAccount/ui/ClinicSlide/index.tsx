import { FC } from "react";

import { Slide } from "../SlideLayout";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const ClinicSlide: FC = () => {
    return (
        <Slide
            width="268px"
            name={"Клиника"}
            infoData={
                <Rows gap={20} rows={["auto"]}>
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
                    <Rows gap={0} rows={["auto"]}>
                        <Text type="h5" fz="15px">
                            Направление
                        </Text>
                        <Text type="p" fz="14px" color="#3C3D3E">
                            Врач-хирург
                        </Text>
                    </Rows>
                </Rows>
            }
        />
    );
};
