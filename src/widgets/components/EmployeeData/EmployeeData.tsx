import { FC } from "react";
import { IEmployeeCardType } from "../EmployeeInfoCard/types";

import { Text, Btn } from "@/shared";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";

import styles from "./EmployeeData.module.scss";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";

export const EmployeeData: FC<IEmployeeCardType> = ({ type }) => {
    return (
        <>
            {type === "center" || type === "clinic" ? (
                <WhiteContentBlock>
                    <div className={styles.about}>
                        <div
                            className={styles.text}
                            style={{ gridGap: SMALL_LAPTOP || LAPTOP ? 6 : 16 }}
                        >
                            <Text
                                type="h2"
                                fz={SMALL_LAPTOP || LAPTOP ? "15px" : "20px"}
                            >
                                Здоровый горизонт
                            </Text>
                            <div className={styles.text}>
                                <Text
                                    type="h4"
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "13px" : "16px"
                                    }
                                >
                                    Клиника
                                </Text>
                                <Text type="p" fz="14px">
                                    Общая медицинская клиника
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text
                                    type="h4"
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "13px" : "16px"
                                    }
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
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "13px" : "16px"
                                    }
                                >
                                    Номер телефона
                                </Text>
                                <Text type="p" fz="14px">
                                    +7(923)-123-45-67
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text
                                    type="h4"
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "13px" : "16px"
                                    }
                                >
                                    Количество персонала
                                </Text>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    128 человек
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text
                                    type="h4"
                                    fz={
                                        SMALL_LAPTOP || LAPTOP ? "13px" : "16px"
                                    }
                                >
                                    Не указано в заполнении профиля
                                </Text>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    79 человек
                                </Text>
                            </div>
                        </div>
                        <div className={styles.text} style={{ gridGap: 10 }}>
                            <Text
                                type="h2"
                                fz={SMALL_LAPTOP || LAPTOP ? "13px" : "16px"}
                            >
                                Какие болезни обслуживаются
                            </Text>
                            <Btn
                                br={SMALL_LAPTOP || LAPTOP ? "9px" : ""}
                                height={SMALL_LAPTOP || LAPTOP ? "35px" : ""}
                                fz={SMALL_LAPTOP || LAPTOP ? "12px" : ""}
                                color="#0064FA"
                            >
                                Полный перечень
                            </Btn>
                        </div>
                    </div>
                </WhiteContentBlock>
            ) : (
                <div className={styles.about} style={{ gridGap: 16 }}>
                    <WhiteContentBlock>
                        <div className={styles.text} style={{ gridGap: 20 }}>
                            <Text type="h2" fz="20px">
                                Зайцев Станислав Юрьевич
                            </Text>
                            <div className={styles.text}>
                                <Text type="h4" fz="16px">
                                    Должность
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    React-разработчик
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz="16px">
                                    Адрес
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    Москва, Российская Федерация
                                </Text>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    ул. Донская, д. 5
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz="16px">
                                    Номер телефона
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    +7(923)-123-45-67
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="h4" fz="16px">
                                    Пол
                                </Text>
                                <Text type="p" fz="14px" color="#3C3D3E">
                                    Мужской
                                </Text>
                            </div>
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <div className={styles.data}>
                            <svg
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                            >
                                <path
                                    d="M27.999 0.964844C24.4369 0.964844 20.9097 1.66645 17.6187 3.02959C14.3278 4.39274 11.3375 6.39074 8.81875 8.9095C3.73183 13.9964 0.874023 20.8957 0.874023 28.0896C0.874023 40.0788 8.6589 50.2505 19.4275 53.8581C20.7838 54.0751 21.2178 53.2343 21.2178 52.5019V47.9178C13.7041 49.5453 12.1038 44.2831 12.1038 44.2831C10.856 41.1366 9.0929 40.2958 9.0929 40.2958C6.62452 38.614 9.28277 38.6683 9.28277 38.6683C11.9953 38.8581 13.4329 41.4621 13.4329 41.4621C15.7928 45.5851 19.7801 44.3645 21.3263 43.7135C21.5704 41.9504 22.2757 40.7569 23.0351 40.0788C17.0134 39.4006 10.6933 37.0679 10.6933 26.7334C10.6933 23.7225 11.724 21.3084 13.4871 19.3826C13.2159 18.7044 12.2665 15.8835 13.7584 12.2216C13.7584 12.2216 16.0369 11.4893 21.2178 14.9883C23.3606 14.3916 25.6934 14.0932 27.999 14.0932C30.3046 14.0932 32.6374 14.3916 34.7803 14.9883C39.9612 11.4893 42.2397 12.2216 42.2397 12.2216C43.7315 15.8835 42.7822 18.7044 42.5109 19.3826C44.274 21.3084 45.3048 23.7225 45.3048 26.7334C45.3048 37.095 38.9575 39.3735 32.9086 40.0516C33.8852 40.8925 34.7803 42.5471 34.7803 45.0697V52.5019C34.7803 53.2343 35.2143 54.1023 36.5976 53.8581C47.3663 50.2234 55.124 40.0788 55.124 28.0896C55.124 24.5275 54.4224 21.0003 53.0593 17.7094C51.6961 14.4185 49.6981 11.4283 47.1793 8.9095C44.6605 6.39074 41.6703 4.39274 38.3793 3.02959C35.0884 1.66645 31.5611 0.964844 27.999 0.964844Z"
                                    fill="black"
                                />
                            </svg>
                            <div className={styles.text} style={{ gridGap: 5 }}>
                                <Text type="h2" fz="20px">
                                    Github
                                </Text>
                                <Text type="p" color="#3C3D3E">
                                    zaytsevstas
                                </Text>
                            </div>
                        </div>
                        <Btn color="#0064FA">
                            <div className={styles.redirect}>
                                <Text type="h2" fz="16px">
                                    Перейти
                                </Text>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M11.2498 9.16927L18.0831 2.33594"
                                        stroke="white"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M18.75 5.66406V1.66406H14.75"
                                        stroke="white"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M9.58301 1.66406H7.91634C3.74967 1.66406 2.08301 3.33073 2.08301 7.4974V12.4974C2.08301 16.6641 3.74967 18.3307 7.91634 18.3307H12.9163C17.083 18.3307 18.7497 16.6641 18.7497 12.4974V10.8307"
                                        stroke="white"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </Btn>
                    </WhiteContentBlock>
                </div>
            )}
        </>
    );
};
