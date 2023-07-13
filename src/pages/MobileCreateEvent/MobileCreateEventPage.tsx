import { FC, useId } from "react";

import {
    Calendar,
    CustomMobileHeader,
    MobileCard,
    MobileContainer,
    Slider,
} from "@/widgets";
import { BackArrow, Btn, MobileFilter, Switch, Text } from "@/shared";

import info from "/assets/info-circle.svg";
import styles from "./MobileCreateEventPage.module.scss";

const MobileCreateEventPage: FC = () => {
    const data = [
        {
            id: useId(),
            title: "Требуется ли переводчик",
            subtitle: "Выберите предпочитаемый язык",
            content: <div></div>,
        },
    ];

    return (
        <div className={styles.events}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/account" />
                    <Text type="h2" fz="19px">
                        Создать событие
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <Text type="h2" fz="22px">
                            Создать событие
                        </Text>
                        <div className={styles.subtitle}>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Выберите формат записи
                            </Text>
                            <img src={info} alt="" />
                        </div>
                    </div>
                    <div>
                        <MobileFilter data={["Онлайн", "Оффлайн"]} />
                        <div className={styles.calendar}>
                            <Calendar info />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" fz="12px" color="#B1B2B4">
                            Выберите специалиста
                        </Text>
                        <Slider container="100%" navigate={false}>
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />
                        </Slider>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" fz="12px" color="#B1B2B4">
                            Выберите формат записи
                        </Text>
                        <div className={styles.items}>
                            {data.map((item) => (
                                <div className={styles.item}>
                                    <Text type="p" fz="15px">
                                        {item.title}
                                    </Text>
                                    <Switch />
                                    <div className={styles.content}>
                                        <div className={styles.inner}>
                                            <Text type="p" color="#7D7F82">
                                                {item.subtitle}
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.item}>
                                <Text type="p" fz="15px">
                                    Уведомить
                                </Text>
                                <Switch />
                            </div>
                            <div className={styles.item}>
                                <Text type="p" fz="15px">
                                    Добавить аккаунт
                                </Text>
                                <Switch />
                            </div>
                            <div className={styles.item}>
                                <Text type="p" fz="15px">
                                    Прикрепить файл
                                </Text>
                                <Switch />
                            </div>
                            <div className={styles.item}>
                                <Text type="p" fz="15px">
                                    Дополнительный опрос специалиста
                                </Text>
                                <Switch />
                            </div>
                        </div>
                    </div>
                    <Btn color="#0064FA" height="40px" br="12px">
                        Записаться
                    </Btn>
                </div>
            </MobileContainer>
        </div>
    );
};

export default MobileCreateEventPage;
