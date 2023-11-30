import { FC, useState, FormEvent, useEffect } from "react";

import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { Modal } from "../../../../entities/Modal";
import { MOBILE } from "@/shared/utils";

import arrowRight from "/assets/arrow-right-black.svg";
import selectIcon from "/assets/tick-circle.svg";
import styles from "./RegistrationForPersonal.module.scss";

export const RegistrationForPersonal: FC = () => {
    const [tel, setTel] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSelect, setIsSelect] = useState<string>("");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

    useEffect(() => {
        setIsSelect(selectData[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const classes = isOpen
        ? `${styles.dropdown} ${styles.open}`
        : styles.dropdown;

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        console.log(e);
    };
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const data = [
        {
            placeholder: "Имя",
        },
        {
            placeholder: "Фамилия",
        },
        {
            placeholder: "Страна",
        },
        {
            placeholder: "Город",
        },
        {
            placeholder: "Номер телефона",
        },
    ];

    const selectData = [
        "Регистрация врача ",
        "Регистрация клиники",
        "Регистрация онлайн центра (администратора)",
        "Регистрация инвестора",
        "Регистрация аптеки",
        "Регистрация реабилитационного центра",
        "Регистрация больницы",
        "Регистрация универститета",
    ];

    return (
        <>
            <div className={styles.registration}>
                <Text position="center" type="h2" fz="28px" color="#262626">
                    Регистрация
                </Text>
                <form
                    action="#"
                    className={styles.form}
                    onSubmit={onSubmitHandler}
                >
                    <div className={styles.box}>
                        {data.map((item, i) => (
                            <Input
                                key={i}
                                borderRadius={MOBILE ? "16px" : ""}
                                type="text"
                                placeholder={item.placeholder}
                                borderColor="#E9EAEB"
                                onChange={(e) => setTel(e.target.value)}
                                value={tel}
                            />
                        ))}
                    </div>
                    <label style={{ margin: "32px 0px 26px" }}>
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz={MOBILE ? "14px" : ""}
                        >
                            Выберите цель регистрации
                        </Text>
                        <div className={styles.select}>
                            <div
                                className={styles.content}
                                onClick={handleClick}
                            >
                                <Text type="p" color="#262626">
                                    {isSelect}
                                </Text>
                                <img
                                    src={arrowRight}
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                            <div style={{ position: "relative" }}>
                                <div className={classes}>
                                    <div style={{ minHeight: 0 }}>
                                        {selectData.map((item, i) => (
                                            <div
                                                className={styles.item}
                                                key={i}
                                                title={
                                                    i > 1 ? "Недоступно" : ""
                                                }
                                                onClick={() =>
                                                    i <= 1 && setIsSelect(item)
                                                }
                                            >
                                                <Text
                                                    type="p"
                                                    color={
                                                        i <= 1
                                                            ? "#262626"
                                                            : "#26262680"
                                                    }
                                                >
                                                    {item}
                                                </Text>
                                                {isSelect === item && (
                                                    <img
                                                        src={selectIcon}
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <div
                        style={{
                            paddingRight: 24,
                            cursor: "pointer",
                            marginBottom: 24,
                        }}
                    >
                        <Text type="p" color="#0064FA" fz="15px" position="end">
                            Подробнее
                        </Text>
                    </div>
                    <div>
                        <Btn
                            color="#0064FA"
                            type="submit"
                            disabled={tel === ""}
                        >
                            Продолжить
                        </Btn>
                    </div>
                </form>
            </div>
            <Modal
                isOpen={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                width="500px"
            >
                <Text type="h2" position="center" fz={MOBILE ? "17px" : "26px"}>
                    На ваш телефон была отправлена ссылка
                </Text>
                <div className={styles.modalText}>
                    <Text
                        type="p"
                        fz={MOBILE ? "14px" : "18px"}
                        color="#B1B2B4"
                        position="center"
                    >
                        Для завершения регистрации вам необходимо её заполнить
                    </Text>
                </div>
                <Btn
                    br={MOBILE ? "12px" : ""}
                    color="#0064FA"
                    height={MOBILE ? "44px" : "54px"}
                    padding="16px"
                    fz={MOBILE ? "13px" : ""}
                >
                    Продолжить
                </Btn>
            </Modal>
        </>
    );
};
