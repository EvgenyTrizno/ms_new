import { FC } from "react";
import { IEmployeeCardType } from "../EmployeeInfoCard/types";

import { Text, Btn } from "@/shared";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";

import styles from "./EmployeeData.module.scss";
import { LAPTOP, MOBILE, SMALL_LAPTOP } from "@/shared/utils";

export const EmployeeData: FC<IEmployeeCardType> = ({ type }) => {
    return (
        <WhiteContentBlock>
            <div className={styles.about}>
                <Text type="h2" fz={MOBILE || LAPTOP ? "17px" : "20px"}>
                    Здоровый горизонт
                </Text>
                <div className={styles.info}>
                    {type === "clinic" || type === "center" ? (
                        <div className={styles.content}>
                            <div className={styles.text}>
                                <Text type="h4" fz={MOBILE ? "14px" : "15px"}>
                                    Клиника
                                </Text>
                                <Text type="p" fz="14px">
                                    Общая медицинская клиника
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz={MOBILE ? "14px" : "15px"}>
                                    Адрес
                                </Text>
                                <Text type="p" fz="14px">
                                    Ташкент, Республика Узбекистан
                                </Text>
                                <Text type="p" fz="12px" color="#7D7F82">
                                    ул. Донская, д. 5
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz={MOBILE ? "14px" : "15px"}>
                                    Номер телефона
                                </Text>
                                <Text type="p" fz="14px">
                                    +7(923)-123-45-67
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz={MOBILE ? "14px" : "15px"}>
                                    Количество персонала
                                </Text>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    128 человек
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz={MOBILE ? "14px" : "15px"}>
                                    Не указано в заполнении профиля
                                </Text>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    79 человек
                                </Text>
                            </div>
                        </div>
                    ) : (
                        type === "employee" && (
                            <div className={styles.content}>
                                <div className={styles.text}>
                                    <Text
                                        type="h4"
                                        fz={MOBILE ? "14px" : "15px"}
                                    >
                                        Адрес
                                    </Text>
                                    <Text type="p" fz="14px">
                                        Ташкент, Республика Узбекистан
                                    </Text>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        ул. Донская, д. 5
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text
                                        type="h4"
                                        fz={MOBILE ? "14px" : "15px"}
                                    >
                                        Электронная почта
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        alex@email.com
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text
                                        type="h4"
                                        fz={MOBILE ? "14px" : "15px"}
                                    >
                                        Пол
                                    </Text>
                                    <Text type="p" fz="14px">
                                        Мужской
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text
                                        type="h4"
                                        fz={MOBILE ? "14px" : "15px"}
                                    >
                                        Ведущий Центр
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        Здоровый Горизонт
                                    </Text>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        5 км от дома
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text
                                        type="h4"
                                        fz={MOBILE ? "14px" : "15px"}
                                    >
                                        Дополнительные центры
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        Импульс Здоровья
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        АртМедЦентр
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        Здоровая Линия
                                    </Text>
                                </div>
                            </div>
                        )
                    )}
                    {type === "center" ||
                        (type === "clinic" && (
                            <div
                                className={styles.text}
                                style={{ gridGap: MOBILE ? 8 : 10 }}
                            >
                                <Text
                                    type="h2"
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "15px" : "16px"
                                    }
                                >
                                    Какие болезни обслуживаются
                                </Text>
                                <Btn
                                    br="9px"
                                    height={
                                        SMALL_LAPTOP || LAPTOP ? "37px" : "42px"
                                    }
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "14px" : "15px"
                                    }
                                    padding={LAPTOP ? "10px" : "12px"}
                                    color="#0064FA"
                                >
                                    Полный перечень
                                </Btn>
                            </div>
                        ))}
                </div>
            </div>
        </WhiteContentBlock>
    );
};
