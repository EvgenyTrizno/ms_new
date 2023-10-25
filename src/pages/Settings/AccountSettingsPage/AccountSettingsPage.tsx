import { FC, useId } from "react";
import { useNavigate } from "react-router";
import { IAccountData } from "./types";

import { MobileContainer, CustomMobileHeader, ParamsBlock } from "@/widgets";
// import { BackArrow } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { useUserCondition } from "@/shared/model/store";
import { MOBILE, TABLET } from "@/shared/utils";

import heartBlue from "/assets/heart-blue.svg";
import heartRed from "/assets/heart-red.svg";
import markRed from "/assets/archive-tick-red.svg";
import markBlue from "/assets/archive-tick-blue.svg";
import cartBlue from "/assets/shopping-cart-blue.svg";
import cartRed from "/assets/shopping-cart-blue.svg";
import man from "/assets/man.jpg";
import pencil from "/assets/pencil-blue.svg";
import styles from "./AccountSettingsPage.module.scss";

const AccountSettingsPage: FC = () => {
    const navigate = useNavigate();
    const { condition } = useUserCondition();

    const sick = condition === "Болен";
    const data: IAccountData = {
        main: [
            {
                id: useId(),
                placeholder: "Имя",
            },
            {
                id: useId(),
                placeholder: "Фамилия",
            },
            {
                id: useId(),
                placeholder: "Дата рождения",
            },
            {
                id: useId(),
                placeholder: "Страна",
            },
            {
                id: useId(),
                placeholder: "Город",
            },
            {
                id: useId(),
                placeholder: "Адрес",
            },
            {
                id: useId(),
                placeholder: "Логин",
            },
        ],
        other: [
            {
                id: useId(),
                icon: {
                    healthy: heartBlue,
                    sick: heartRed,
                },
                label: "Подписки",
                navigate: "/account/subscriptions",
            },
            {
                id: useId(),
                icon: {
                    healthy: markBlue,
                    sick: markRed,
                },
                label: "Сохраненное",
                navigate: "",
            },
            {
                id: useId(),
                icon: {
                    healthy: cartBlue,
                    sick: cartRed,
                },
                label: "Покупки",
                navigate: "",
            },
        ],
    };

    return (
        <div className={styles.account}>
            <CustomMobileHeader back>
                <div className={styles.header}>
                    {/* <BackArrow /> */}
                    <Text type="h2" fz="19px">
                        Аккаунт
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.avatar}>
                    <img src={man} alt="" />
                    <div className={styles.edit}>
                        <img src={pencil} alt="" />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz={TABLET ? "16px" : "14px"}
                        >
                            Основные
                        </Text>
                        <div className={styles.items}>
                            {data.main.map((item) =>
                                MOBILE ? (
                                    <Input
                                        type="text"
                                        key={item.id}
                                        placeholder={item.placeholder}
                                        bgcolor="white"
                                        padding="16px"
                                        height="auto"
                                        borderRadius="16px"
                                        fz="13px"
                                    />
                                ) : (
                                    <Input
                                        type="text"
                                        key={item.id}
                                        placeholder={item.placeholder}
                                        borderRadius="16px"
                                        bgcolor="white"
                                        fz="15px"
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz={TABLET ? "16px" : "14px"}
                        >
                            Номер
                        </Text>
                        {MOBILE ? (
                            <Input
                                type="text"
                                placeholder="Номер"
                                bgcolor="white"
                                padding="16px"
                                height="auto"
                                borderRadius="16px"
                                fz="13px"
                            />
                        ) : (
                            <Input
                                type="text"
                                placeholder="Номер"
                                bgcolor="white"
                                borderRadius="16px"
                                fz="15px"
                            />
                        )}
                    </div>
                    <div className={styles.box}>
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz={TABLET ? "16px" : "14px"}
                        >
                            Эл. почта
                        </Text>
                        {MOBILE ? (
                            <Input
                                type="text"
                                placeholder="Эл. почта"
                                bgcolor="white"
                                padding="16px"
                                height="auto"
                                borderRadius="16px"
                                fz="13px"
                            />
                        ) : (
                            <Input
                                type="text"
                                borderRadius="16px"
                                placeholder="Номер"
                                bgcolor="white"
                                fz="15px"
                            />
                        )}
                    </div>
                    <div className={styles.box}>
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz={TABLET ? "16px" : "14px"}
                        >
                            Другое
                        </Text>
                        <div className={styles.items}>
                            {data.other.map((item) => (
                                <ParamsBlock
                                    onClick={() => navigate(item.navigate)}
                                    key={item.id}
                                    label={item.label}
                                    img={
                                        sick
                                            ? item.icon.sick
                                            : item.icon.healthy
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default AccountSettingsPage;
