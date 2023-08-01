import { FC, useEffect, useId, useState } from "react";
import { ICraeteEventData } from "./types";

import { Layout } from "../Layout/Layout";
import { Btn, Filter, Switch, Text } from "@/shared";
import { Calendar } from "@/widgets";
import { Account } from "@/shared/api/Account";
import { getRefreshTokenFromCookies } from "@/features";
import { useUserCondition } from "@/shared/model/store";

import info from "/assets/info-circle.svg";
import woman from "/assets/woman.jpg";
import arrow from "/assets/arrow-left-black.svg";
import file from "/assets/file.svg";
import styles from "./CreateEventPage.module.scss";

const CreateEventPage: FC = () => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [ids, setIds] = useState<string[]>([]);

    const { condition } = useUserCondition();
    const { getAllDoctors } = Account();

    useEffect(() => {
        if (getRefreshTokenFromCookies()) {
            getAllDoctors(getRefreshTokenFromCookies() as string).then((res) =>
                console.log(res)
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sick = condition === "Болен";

    const data: ICraeteEventData[] = [
        {
            id: useId(),
            title: "Уведомить",
            subtitle: "Выберите время для уведомления",
            content: (
                <div className={styles.translator}>
                    <div className={styles.translatorContent}>
                        <Text type="p" fz="15px">
                            За
                        </Text>
                        <div className={styles.grayBlock}>2</div>
                        <Text type="p" fz="15px">
                            дня
                        </Text>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.translatorContent}>
                        <Text type="p" fz="15px">
                            За
                        </Text>
                        <div className={styles.grayBlock}>20</div>
                        <Text type="p" fz="15px">
                            минут
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Добавить аккаунт",
            subtitle: "Выберите время для уведомления",
            content: (
                <div className={styles.accounts}>
                    <>
                        {!isAdd && (
                            <>
                                <div className={styles.accountsList}>
                                    <div className={styles.account}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text type="h3" fz="14px">
                                                Михайлова Т. А.
                                            </Text>
                                            <Text
                                                type="p"
                                                fz="16px"
                                                color="#7D7F82"
                                            >
                                                Хирург
                                            </Text>
                                        </div>
                                    </div>
                                    <div className={styles.account}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text type="h3" fz="14px">
                                                Михайлова Т. А.
                                            </Text>
                                            <Text
                                                type="p"
                                                fz="16px"
                                                color="#7D7F82"
                                            >
                                                Хирург
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={styles.add}
                                    onClick={() => setIsAdd(true)}
                                >
                                    <Text
                                        type="p"
                                        color="#7D7F82"
                                        fz="15px"
                                        position="end"
                                    >
                                        Добавить +
                                    </Text>
                                </div>
                            </>
                        )}
                        {isAdd && (
                            <div>
                                <div className={styles.search}>
                                    <button onClick={() => setIsAdd(false)}>
                                        <img src={arrow} alt="" />
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Введите имя"
                                    />
                                </div>
                                <div className={styles.result}>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultBlock}>
                                            <img src={woman} alt="" />
                                            <div className={styles.data}>
                                                <Text type="h4" fz="14px">
                                                    Михайлова Т. А.
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz="12"
                                                    color="#7D7F82"
                                                >
                                                    Хирург
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.resultBlock}>
                                            <img src={woman} alt="" />
                                            <div className={styles.data}>
                                                <Text type="h4" fz="14px">
                                                    Михайлова Т. А.
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz="12"
                                                    color="#7D7F82"
                                                >
                                                    Хирург
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultBlock}>
                                            <img src={woman} alt="" />
                                            <div className={styles.data}>
                                                <Text type="h4" fz="14px">
                                                    Михайлова Т. А.
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz="12"
                                                    color="#7D7F82"
                                                >
                                                    Хирург
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.resultBlock}>
                                            <img src={woman} alt="" />
                                            <div className={styles.data}>
                                                <Text type="h4" fz="14px">
                                                    Михайлова Т. А.
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz="12"
                                                    color="#7D7F82"
                                                >
                                                    Хирург
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Прикрепить файл",
            subtitle: "Выберите материал",
            content: (
                <div className={styles.file}>
                    <img src={file} alt="" />
                    <Text type="h3" color="#7D7F82">
                        Добавить файл
                    </Text>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Дополнительная проверка специалистов",
            subtitle: "Уведомить",
            content: <div></div>,
        },
    ];

    return (
        <Layout>
            <div className={styles.container}>
                <Text type="h2" fz="36px">
                    Создать событие
                </Text>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <Text type="p" color="#7D7F82">
                                Выберите формат записи
                            </Text>
                            <img src={info} alt="" />
                        </div>
                        <div className={styles.calendar}>
                            <Filter data={["Онлайн", "Оффлайн"]} />
                            <Calendar info height="750px" width="100%" />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <Text type="p" color="#7D7F82">
                                Выберите формат записи
                            </Text>
                        </div>
                        <div className={styles.options}>
                            {data.map((item) => (
                                <div
                                    className={styles.item}
                                    key={item.id}
                                    style={{
                                        borderColor: sick ? "#F7E6E8" : "",
                                    }}
                                >
                                    <div className={styles.block}>
                                        <Text type="p" fz="18px">
                                            {item.title}
                                        </Text>
                                        <Switch
                                            onChange={(e) => {
                                                if (e?.target.checked) {
                                                    setIds([...ids, item.id]);
                                                } else {
                                                    const id = ids.filter(
                                                        (it) => it !== item.id
                                                    );

                                                    setIds(id);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={
                                            ids.includes(item.id)
                                                ? `${styles.content} ${styles.open}`
                                                : styles.content
                                        }
                                    >
                                        <div style={{ minHeight: 0 }}>
                                            <div
                                                className={styles.label}
                                                style={{
                                                    transition: "ease .5s",
                                                    pointerEvents: ids.includes(
                                                        item.id
                                                    )
                                                        ? "auto"
                                                        : "none",
                                                    opacity: ids.includes(
                                                        item.id
                                                    )
                                                        ? 1
                                                        : 0,
                                                }}
                                            >
                                                <Text
                                                    type="p"
                                                    fz="15px"
                                                    color="#7D7F82"
                                                >
                                                    {item.subtitle}
                                                </Text>
                                            </div>
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.btn}>
                            <Btn color="#0064FA">Записаться</Btn>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateEventPage;
