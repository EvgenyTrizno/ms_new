import { ChangeEvent, FC, useEffect, useId, useState } from "react";
import { ICraeteEventData } from "./types";

import { Layout } from "../Layout/Layout";
import { Btn, Filter, Input, Switch, Text } from "@/shared";
import { Calendar } from "@/widgets";
import { Account } from "@/shared/api/Account";
import { getAccessTokenFromCookies } from "@/features";
import { useFilter, useUserCondition } from "@/shared/model/store";
import { IProfileData } from "@/shared/api/Account/types";

import info from "/assets/info-circle.svg";
import arrow from "/assets/arrow-left-black.svg";
import fileIcon from "/assets/file.svg";
import styles from "./CreateEventPage.module.scss";

const CreateEventPage: FC = () => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [ids, setIds] = useState<string[]>([]);
    const [status, setStatus] = useState<boolean>(true);
    const [selectDate, setSelectDate] = useState<Date>();
    const [selectDateEnd, setSelectDateEnd] = useState<Date>();
    const [notifyDays, setNotifyDays] = useState<string>("");
    const [notifyMinutes, setNotifyMinutes] = useState<string>("");
    const [notify, setNotify] = useState<Date>();
    const [doctors, setDoctors] = useState<IProfileData[]>([]);
    const [name, setName] = useState<string>("");
    const [candidate, setCandidate] = useState<IProfileData[]>([]);
    const [specialCheck, setSpecialCheck] = useState<boolean>(false);
    const [selectDoctors, setSelectDoctors] = useState<IProfileData[]>([]);
    const [duration, setDuration] = useState<number>(0);
    const [file, setFile] = useState<string>("");

    const { condition } = useUserCondition();
    const { isFilter } = useFilter();
    const { getAllDoctors, createNotesByUserToken } = Account();

    const sick = condition === "Болен";
    const accessToken = getAccessTokenFromCookies();

    useEffect(() => {
        accessToken &&
            getAllDoctors(accessToken).then((res) => setDoctors(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        isFilter === "Онлайн" ? setStatus(true) : setStatus(false);
    }, [isFilter]);

    useEffect(() => {
        if (selectDate) {
            const dateCopy: Date = new Date(selectDate);

            if (notifyMinutes && notifyDays) {
                const totalMinutesChange: number =
                    +notifyMinutes + +notifyDays * 24 * 60;
                const newDate: Date = new Date(
                    dateCopy.getTime() - totalMinutesChange * 60000
                );

                setNotify(newDate);
            } else if (notifyMinutes) {
                const minutesChange: number = +notifyMinutes;
                const newDate: Date = new Date(
                    dateCopy.getTime() - minutesChange * 60000
                );

                setNotify(newDate);
            } else if (notifyDays) {
                const daysChange: number = +notifyDays;
                const newDate: Date = new Date(
                    dateCopy.getTime() - daysChange * 24 * 60 * 60000
                );

                setNotify(newDate);
            }
        }
    }, [notifyDays, notifyMinutes, selectDate]);

    useEffect(() => {
        if (selectDate && selectDateEnd) {
            const dateCopyStart = new Date(selectDate);
            const dateCopyEnd = new Date(selectDateEnd);
            const diff = +dateCopyEnd - +dateCopyStart;
            const minutes = Math.floor(diff / (1000 * 60));

            setDuration(minutes);
        }
    }, [selectDate, selectDateEnd]);

    useEffect(() => {
        setSpecialCheck(false); // заглушка

        doctors && name !== ""
            ? setCandidate(
                  doctors.filter((item) =>
                      item.first_name
                          ?.toLowerCase()
                          .includes(name.toLowerCase())
                  )
              )
            : setCandidate([]);
    }, [doctors, name]);

    const handleClick = () => {
        accessToken &&
            selectDate &&
            selectDateEnd &&
            notify &&
            createNotesByUserToken(
                accessToken,
                63,
                "Проверка",
                status,
                selectDate.toISOString(),
                selectDateEnd.toISOString(),
                notify.toISOString(),
                selectDoctors[0].id,
                "404",
                duration,
                specialCheck,
                1,
                file
            ).then((res) => console.log(res));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        name === "day" && setNotifyDays(value);
        name === "minutes" && setNotifyMinutes(value);
    };

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
                        <Input
                            type="text"
                            className={styles.grayBlock}
                            value={notifyDays}
                            name="day"
                            onChange={handleChange}
                            placeholder="0"
                        />
                        <Text type="p" fz="15px">
                            дня
                        </Text>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.translatorContent}>
                        <Text type="p" fz="15px">
                            За
                        </Text>
                        <Input
                            type="text"
                            className={styles.grayBlock}
                            value={notifyMinutes}
                            onChange={handleChange}
                            name="minutes"
                            placeholder="0"
                        />
                        <Text type="p" fz="15px">
                            минут
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Отметить аккаунт",
            subtitle: "",
            content: (
                <div className={styles.accounts}>
                    <>
                        {!isAdd && (
                            <>
                                <div className={styles.accountsList}>
                                    {selectDoctors &&
                                        selectDoctors.map((item) => (
                                            <div className={styles.account}>
                                                <img
                                                    src={item.image}
                                                    alt={`${item.first_name}`}
                                                />
                                                <div className={styles.data}>
                                                    <Text type="h3" fz="14px">
                                                        {item.last_name}{" "}
                                                        {item.first_name?.slice(
                                                            0,
                                                            1
                                                        )}
                                                        .{" "}
                                                        {item.surname?.slice(
                                                            0,
                                                            1
                                                        )}
                                                        .
                                                    </Text>
                                                    <Text
                                                        type="p"
                                                        fz="16px"
                                                        color="#7D7F82"
                                                    >
                                                        {item.group}
                                                    </Text>
                                                </div>
                                            </div>
                                        ))}
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
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.result}>
                                    {candidate &&
                                        candidate.map((item) => (
                                            <div
                                                onClick={() =>
                                                    setSelectDoctors(
                                                        !selectDoctors.includes(
                                                            item
                                                        )
                                                            ? [
                                                                  ...selectDoctors,
                                                                  item,
                                                              ]
                                                            : [...selectDoctors]
                                                    )
                                                }
                                                className={styles.resultItem}
                                                style={{
                                                    borderBottom:
                                                        candidate &&
                                                        candidate[
                                                            candidate.length - 1
                                                        ]
                                                            ? "none"
                                                            : "",
                                                }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={`${item.first_name}`}
                                                />
                                                <div className={styles.data}>
                                                    <Text type="h2" fz="15px">
                                                        {item.last_name}{" "}
                                                        {item.first_name?.slice(
                                                            0,
                                                            1
                                                        )}
                                                        .{" "}
                                                        {item.surname?.slice(
                                                            0,
                                                            1
                                                        )}
                                                        .
                                                    </Text>
                                                    <Text
                                                        type="p"
                                                        fz="13px"
                                                        color="#7D7F82"
                                                    >
                                                        {item.group}
                                                    </Text>
                                                </div>
                                            </div>
                                        ))}
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
                    <Input
                        type="file"
                        onChange={(e) =>
                            setFile(
                                (e.target.files && e.target.files[0].name) ?? ""
                            )
                        }
                    />
                    <img src={fileIcon} alt="" />
                    <Text type="h3" color="#7D7F82">
                        Добавить файл
                    </Text>
                </div>
            ),
        },
        {
            id: useId(),
            title: "Дополнительная проверка специалистов",
            subtitle: null,
            content: null,
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
                            <Calendar
                                info
                                height="750px"
                                width="100%"
                                selectDate={selectDate}
                                setSelectDate={setSelectDate}
                                setSelectDateEnd={setSelectDateEnd}
                            />
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
                            <Btn color="#0064FA" onClick={handleClick}>
                                Записаться
                            </Btn>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateEventPage;
