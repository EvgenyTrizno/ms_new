import { FC } from "react";
import { IUserInfoProps } from "./types";

import { Cols } from "@/shared/ui/Cols";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Image } from "@/shared/ui/Image";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { MOBILE, TABLET } from "@/shared/utils";

import styles from "./styles.module.scss";

export const UserInfo: FC<IUserInfoProps> = ({
    img,
    name,
    country,
    street,
    email,
    sex,
    mainCenter,
    distanse,
    createdAt,
    centers,
}) => {
    function convertStringToDate(inputStr: string | Date) {
        const dateObject = new Date(inputStr);

        const getMonthName = (month: number) => {
            const monthNames = [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "октября",
                "ноября",
                "декабря",
            ];
            return monthNames[month];
        };

        const formattedDate = `${dateObject.getDate()} ${getMonthName(
            dateObject.getMonth()
        )} ${dateObject.getFullYear()}`;

        return formattedDate;
    }

    return (
        <Cols
            gap={10}
            type="custom"
            cols={MOBILE || TABLET ? [] : ["312px", "550px"]}
        >
            <Rows gap={10} rows={["auto"]}>
                <WhiteContentBlock className={styles.imgContainer}>
                    <Image src={img} alt="" />
                    {(MOBILE || TABLET) && (
                        <Rows gap={5} rows={["auto"]} style={{ marginTop: 12 }}>
                            <Text type="h5" fz="14px">
                                Зарегистрирован с&nbsp;
                                {convertStringToDate(createdAt)}
                            </Text>
                            <Row gap={5}>Аккаунт верифицирован</Row>
                        </Rows>
                    )}
                </WhiteContentBlock>
                {!MOBILE && !TABLET && (
                    <WhiteContentBlock>
                        <Rows gap={8} rows={["auto"]}>
                            <Text type="h5" fz="14px">
                                Зарегистрирован с&nbsp;
                                {convertStringToDate(createdAt)}
                            </Text>
                            <Row gap={5}>Аккаунт верифицирован</Row>
                        </Rows>
                    </WhiteContentBlock>
                )}
            </Rows>
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <Text type="h4" fz="18px">
                        {name}
                    </Text>
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
                            Электронная почта
                        </Text>
                        <Text type="p" fz="14px" color="#3C3D3E">
                            {email}
                        </Text>
                    </Rows>
                    <Rows gap={4} rows={["auto"]}>
                        <Text type="h6" fz="14px">
                            Пол
                        </Text>
                        <Text type="p" fz="14px" color="#3C3D3E">
                            {sex}
                        </Text>
                    </Rows>
                    <Rows gap={4} rows={["auto"]}>
                        <Text type="h6" fz="14px">
                            Ведущий Центр
                        </Text>
                        <Text type="p" fz="14px" color="#3C3D3E">
                            {mainCenter}
                        </Text>
                        <Text type="p" fz="12px" color="#7D7F82">
                            {distanse} км от дома
                        </Text>
                    </Rows>
                    <Rows gap={4} rows={["auto"]}>
                        <Text type="h6" fz="14px">
                            Дополнительные центры
                        </Text>
                        {centers.map((item) => (
                            <Text type="p" fz="14px" color="#3C3D3E">
                                {item.name}
                            </Text>
                        ))}
                    </Rows>
                </Rows>
            </WhiteContentBlock>
        </Cols>
    );
};
