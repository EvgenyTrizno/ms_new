import { FC, useId } from "react";
import { INoteData } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { NoteParam } from "../NoteParam";

import styles from "../NoteBlock/styles.module.scss";

export const NoteParams: FC = () => {
    const data: INoteData[] = [
        {
            id: useId(),
            title: "Создать конференцию",
            subtitle: "",
            content: (
                <div className={styles.accounts}>
                    {/* <>
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
                    </> */}
                </div>
            ),
        },
        {
            id: useId(),
            title: "Напоминание",
            subtitle: "Выберите время для уведомления",
            content: (
                <div className={styles.translator}>
                    {/* <div className={styles.translatorContent}>
                        <Text type="p" fz="15px">
                            За
                        </Text>
                        <Input
                            type="text"
                            className={styles.grayBlock}
                            value={notifyDays}
                            name="day"
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
                            name="minutes"
                            placeholder="0"
                        />
                        <Text type="p" fz="15px">
                            минут
                        </Text>
                    </div> */}
                </div>
            ),
        },
        {
            id: useId(),
            title: "Прикрепить файл",
            subtitle: "Выберите материал",
            content: (
                <div className={styles.file}>
                    {/* <Input type="file" />
                    <img src={fileIcon} alt="" />
                    <Text type="h3" color="#7D7F82">
                        Добавить файл
                    </Text> */}
                </div>
            ),
        },
        {
            id: useId(),
            title: "Разделить запись",
            subtitle: "",
            content: <div>params</div>,
        },
        {
            id: useId(),
            title: "Повторить запись",
            subtitle: "",
            content: <div>params</div>,
        },
        {
            id: useId(),
            title: "Дополнительная проверка",
            subtitle: null,
            content: null,
        },
    ];

    return (
        <Rows gap={10} rows={["auto"]}>
            {data.map((item) => (
                <NoteParam
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle ?? ""}
                    content={item.content}
                />
            ))}
        </Rows>
    );
};
