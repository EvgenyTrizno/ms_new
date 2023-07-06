import { FC } from "react";
import { useNavigate } from "react-router";

import { Text, MobileFilter, MobileSearch, Btn } from "@/shared";
import { MobileContainer, CustomMobileHeader } from "@/widgets";

import arrow from "/assets/arrow-left.svg";
import settings from "/assets/setting-black.svg";
import add from "/assets/add-circle.svg";
import sender from "/assets/send.svg";
import doctor from "/assets/doctor-male.svg";
import arrowRight from "/assets/arrow-right-black.svg";
import ghost from "/assets/ghost.svg";
import styles from "./MobileNotesPage.module.scss";

export const MobileNotesPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.notes}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <div className={styles.nav}>
                        <img
                            src={arrow}
                            alt=""
                            onClick={() => navigate("/m/account")}
                        />
                        <Text type="h2" fz="19px">
                            Записи
                        </Text>
                    </div>
                    <img src={settings} alt="" />
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.box}>
                    <MobileSearch placeholder="Введите запрос" icon={add} />
                    <MobileFilter data={["Предстоящие", "История"]} />
                </div>
                <div className={styles.items}>
                    {![].length ? (
                        <div className={styles.empty}>
                            <img src={ghost} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz="17px" position="center">
                                    Ничего нет
                                </Text>
                                <Text
                                    type="p"
                                    position="center"
                                    fz="14px"
                                    color="#B1B2B4"
                                >
                                    Список пуст, создайте запись нажав на кнопку
                                    “Плюс”
                                </Text>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.item}>
                            <div className={styles.managment}>
                                <div className={styles.param}>
                                    <img src={settings} alt="" />
                                </div>
                                <div className={styles.param}>
                                    <img src={sender} alt="" />
                                </div>
                                <div className={styles.param}>
                                    <img src={doctor} alt="" />
                                </div>
                                <div className={styles.param}>
                                    <img src={arrowRight} alt="" />
                                </div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.titles}>
                                    <Text type="h2" fz="18px">
                                        Восстановление
                                    </Text>
                                    <Text type="p" color="#7D7F82" fz="12px">
                                        Название записи
                                    </Text>
                                </div>
                                <ul className={styles.list}>
                                    <li className={styles.li}>
                                        <Text type="p" color="#B1B2B4">
                                            Запись:
                                        </Text>
                                        <Text type="p" color="#00CC5E">
                                            Онлайн
                                        </Text>
                                    </li>
                                    <li className={styles.li}>
                                        <Text type="p" color="#B1B2B4">
                                            Предоставляет:
                                        </Text>
                                        <Text type="p">Московский Центр</Text>
                                    </li>
                                    <li className={styles.li}>
                                        <Text type="p" color="#B1B2B4">
                                            Ведущий:
                                        </Text>
                                        <Text type="p">Иван Иванов</Text>
                                    </li>
                                    <li className={styles.li}>
                                        <Text type="p" color="#B1B2B4">
                                            Причина:
                                        </Text>
                                        <Text type="p">
                                            Проверка мышц спины
                                        </Text>
                                    </li>
                                </ul>
                                <div className={styles.line}></div>
                                <Text type="p" fz="12px" color="#7D7F82">
                                    Запланировать запись
                                </Text>
                                <div className={styles.blocks}>
                                    <div className={styles.block}>
                                        <Text type="p" fz="12px">
                                            Вт
                                        </Text>
                                    </div>
                                    <div className={styles.block}>
                                        <Text type="p" fz="12px">
                                            12:30
                                        </Text>
                                    </div>
                                    <div className={styles.block}>
                                        <Text type="p" fz="12px">
                                            PM
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btns}>
                                <Btn
                                    width="160px"
                                    height="40px"
                                    color="#0064FA"
                                >
                                    Подтвердить
                                </Btn>
                                <Btn
                                    width="160px"
                                    height="40px"
                                    color="transparent"
                                    border="1px solid #0064FA"
                                    textColor="#0064FA"
                                >
                                    Отменить
                                </Btn>
                            </div>
                        </div>
                    )}
                </div>
            </MobileContainer>
        </div>
    );
};
