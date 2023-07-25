import { FC, useId, useState } from "react";

import {
    CustomMobileHeader,
    MobileCalendar,
    MobileCard,
    MobileContainer,
    Slider,
} from "@/widgets";
import { BackArrow, Btn, MobileFilter, MobileSwitch, Text } from "@/shared";

import info from "/assets/info-circle.svg";
import sortArrow from "/assets/sort-arrow.svg";
import file from "/assets/file.svg";
import cross from "/assets/cross-black-small.svg";
import styles from "./MobileCreateEventPage.module.scss";

const MobileCreateEventPage: FC = () => {
    const [isChecked, setIsCheked] = useState<boolean>(false);
    const [ids, setIds] = useState<string[]>([]);

    const data = [
        {
            id: useId(),
            title: "Требуется ли переводчик",
            subtitle: "Выберите предпочитаемый язык",
            content: (
                <div className={styles.lang}>
                    <div className={`${styles.langBox} ${styles.grayBlock}`}>
                        <Text type="p" fz="12px">
                            Русский
                        </Text>
                    </div>
                    <div className={styles.sort}>
                        <img src={sortArrow} alt="" />
                    </div>
                    <div className={`${styles.langBox} ${styles.grayBlock}`}>
                        <Text type="p" fz="12px">
                            Арабский
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Уведомить",
            subtitle: "Выберите время для уведомления",
            content: (
                <div className={styles.time}>
                    <Text type="p" fz="14px">
                        За
                    </Text>
                    <div className={`${styles.grayBlock} ${styles.timeBlock}`}>
                        <Text type="p" fz="12px">
                            20
                        </Text>
                    </div>
                    <Text type="p" fz="14px">
                        минут
                    </Text>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Добавить аккаунт",
            subtitle: "Выберите время для уведомления",
            content: (
                <div className={styles.accounts}>
                    <div className={styles.list}>
                        <div className={styles.account}>
                            <MobileCard />
                        </div>
                    </div>
                    <div>
                        <Text
                            type="h4"
                            fz="13px"
                            color="#7D7F82"
                            position="end"
                        >
                            Добавить +
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Прикрепить файл",
            subtitle: "Выберите материал",
            content: (
                <div className={styles.files}>
                    <div className={styles.select}>
                        <div className={styles.file}>
                            <img src={file} alt="" />
                            <Text type="h3" fz="11px">
                                lorem.img
                            </Text>
                            <img src={cross} alt="" />
                        </div>
                    </div>
                    <div className={styles.filesBtn}>
                        <img src={file} alt="" />
                        <Text type="h2" color="#7D7F82" fz="13px">
                            Добавить файл
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Дополнительный опрос специалиста",
            subtitle: "",
            content: <div className={styles.quiz}></div>,
        },
    ];

    console.log(ids);

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
                            <MobileCalendar info />
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
                                <div className={styles.item} key={item.id}>
                                    <div className={styles.block}>
                                        <Text type="p" fz="15px">
                                            {item.title}
                                        </Text>
                                        <MobileSwitch
                                            checked={
                                                isChecked &&
                                                ids.includes(item.id)
                                            }
                                            onChange={(e) => {
                                                setIsCheked(
                                                    e?.target.checked as boolean
                                                );
                                                setIds([...ids, item.id]);
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={
                                            isChecked && ids.includes(item.id)
                                                ? `${styles.content} ${styles.contentOpen}`
                                                : styles.content
                                        }
                                    >
                                        <div
                                            className={styles.inner}
                                            style={{ minHeight: 0 }}
                                        >
                                            <Text
                                                type="p"
                                                color="#7D7F82"
                                                fz="12px"
                                            >
                                                {item.subtitle}
                                            </Text>
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
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
