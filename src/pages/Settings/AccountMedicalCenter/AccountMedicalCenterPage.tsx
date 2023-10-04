import { FC, useState } from "react";

import { CustomMobileHeader, MobileContainer, Slider, Card } from "@/widgets";
import { BackArrow, Btn, PopUp, Text } from "@/shared";

import center from "/assets/center-icon.jpg";
import verify from "/assets/verify.svg";
import dots from "/assets/dots-more.svg";
import styles from "./AccountMedicalCenterPage.module.scss";

const AccountMedicalCenterPage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);

    return (
        <div className={styles.center}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <div className={styles.nav}>
                        <BackArrow />
                        <Text type="h2" fz="19px">
                            Медицинский центр
                        </Text>
                    </div>
                    <Text type="h2" fz="13px" color="#0064FA">
                        Связаться
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Ведущий центр
                        </Text>
                        <div className={styles.center}>
                            <div className={styles.data}>
                                <img src={center} alt="" />
                                <div className={styles.text}>
                                    <div className={styles.inner}>
                                        <Text type="h2" fz="17px">
                                            Медицинский центр
                                        </Text>
                                        <img src={verify} alt="" />
                                    </div>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Точность в расчетах - 39%
                                    </Text>
                                </div>
                                <img
                                    src={dots}
                                    alt=""
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    className={styles.dots}
                                />
                            </div>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <Text type="p" color="#B1B2B4">
                                        Адрес:
                                    </Text>
                                    <Text type="p">
                                        Россия, Москва, Ленина 47
                                    </Text>
                                </li>
                                <li className={styles.item}>
                                    <Text type="p" color="#B1B2B4">
                                        Номер:
                                    </Text>
                                    <Text type="p">+7 (988) 789-87-89</Text>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Все сотрудники
                        </Text>
                        <Slider>
                            <Card checkbox={false} />
                            <Card checkbox={false} />
                            <Card checkbox={false} />
                            <Card checkbox={false} />
                            <Card checkbox={false} />
                        </Slider>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Все сотрудники
                    </Text>
                    <div className={styles.center}>
                        <div className={styles.data}>
                            <img src={center} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz="17px">
                                    Медицинский центр
                                </Text>
                                <Text type="p" fz="12px" color="#7D7F82">
                                    Точность в расчетах - 39%
                                </Text>
                            </div>
                            <img
                                src={dots}
                                alt=""
                                className={styles.dots}
                                onClick={(e) => {
                                    setIsOpen((prev) => !prev);
                                    setY(e.clientY);
                                }}
                            />
                        </div>
                        <ul
                            className={styles.list}
                            style={{ marginTop: "30px" }}
                        >
                            <li className={styles.item}>
                                <Text type="p" color="#B1B2B4">
                                    Адрес:
                                </Text>
                                <Text type="p">Россия, Москва, Ленина 47</Text>
                            </li>
                            <li className={styles.item}>
                                <Text type="p" color="#B1B2B4">
                                    Номер:
                                </Text>
                                <Text type="p">+7 (988) 789-87-89</Text>
                            </li>
                            <li className={styles.item}>
                                <Text type="p" color="#B1B2B4">
                                    Колличество специалистов:
                                </Text>
                                <Text type="p">40</Text>
                            </li>
                            <li className={styles.item}>
                                <Text type="p" color="#B1B2B4">
                                    Изученные заболевания:
                                </Text>
                                <Text type="p">12</Text>
                            </li>
                        </ul>
                        <div
                            className={styles.line}
                            style={{ margin: "15px 0" }}
                        ></div>
                        <div className={styles.bottom}>
                            <div className={styles.text}>
                                <Text type="p" color="#B1B2B4">
                                    Дата добавления:
                                </Text>
                                <Text type="p">12/02/2004</Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="p" color="#B1B2B4">
                                    Дата добавления:
                                </Text>
                                <Text type="p">12/02/2004</Text>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <PopUp top={`${y / 1.1}px`} right="25px">
                        <li>
                            <Text type="p" fz="14px" position="center">
                                Перейти на страницу
                            </Text>
                        </li>
                        <li>
                            <Text type="p" fz="14px" position="center">
                                Сменить в.центр
                            </Text>
                        </li>
                        <li>
                            <Text type="p" fz="14px" position="center">
                                Cкопировать ссылку
                            </Text>
                        </li>
                        <li>
                            <Text
                                type="p"
                                fz="14px"
                                position="center"
                                color="#D64657"
                            >
                                Пожаловаться
                            </Text>
                        </li>
                    </PopUp>
                )}
                <Btn color="#0064FA" height="40px" br="12px">
                    Добавить центр +
                </Btn>
            </MobileContainer>
        </div>
    );
};

export default AccountMedicalCenterPage;
