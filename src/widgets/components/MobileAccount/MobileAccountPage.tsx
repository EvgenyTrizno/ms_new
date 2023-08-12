import { FC, useEffect, useId } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { IParamsData } from "./types";

import { MobileContainer, ParamsBlock } from "@/widgets";
import { useUserCondition } from "@/shared/model/store";
import { BackArrow, Text } from "@/shared";
import { useProfile } from "@/shared/model/store";

import man from "/assets/man.jpg";
import userBlue from "/assets/user-blue.svg";
import userRed from "/assets/user-red.svg";
import noteBlue from "/assets/note-blue.svg";
import clipBoardBlue from "/assets/clipboard-text-blue.svg";
import markerBlue from "/assets/marker-blue.svg";
import markerRed from "/assets/marker-red.svg";
import houseWithPlusBlue from "/assets/home-with-plus-blue.svg";
import houseWithPlusRed from "/assets/home-with-plus-red.svg";
import logoutBlue from "/assets/logout-blue.svg";
import arrowRight from "/assets/arrow-right-blue.svg";
import arrowRightRed from "/assets/arrow-right-red.svg";
import styles from "./MobileAccountPage.module.scss";
import { TABLET } from "@/shared/utils";

const MobileAccountPage: FC = () => {
    const { condition } = useUserCondition();
    const { isProfile, setIsProfile } = useProfile();
    const navigate = useNavigate();

    const sick = condition === "Болен";
    const classes = sick
        ? `${styles.notify} ${styles.notifyRed} ${styles.notifyRedBorder}`
        : `${styles.notify} ${styles.notifyBlue} ${styles.notifyBlueBorder}`;

    const data: IParamsData[] = [
        {
            id: useId(),
            icon: { healthy: userBlue, sick: userRed },
            label: "Аккаунт",
            navigate: "/m/settings/account",
        },
        {
            id: useId(),
            icon: { healthy: noteBlue, sick: userRed },
            label: "Записи",
            navigate: "/m/notes",
        },
        {
            id: useId(),
            icon: { healthy: houseWithPlusBlue, sick: houseWithPlusRed },
            label: "Медицинский центр",
            navigate: "/m/notes",
        },
        {
            id: useId(),
            icon: { healthy: clipBoardBlue, sick: userRed },
            label: "Медицинская карта",
            navigate: "/m/account/medical-card",
        },
        {
            id: useId(),
            icon: { healthy: markerBlue, sick: markerRed },
            label: "Местоположение",
            navigate: "",
        },
        {
            id: useId(),
            icon: { healthy: logoutBlue, sick: userRed },
            label: "Выход",
            navigate: "",
        },
    ];

    useEffect(() => {
        document.body.style.overflow = `${isProfile ? "hidden" : ""}`;
    }, [isProfile]);

    return (
        <AnimatePresence>
            {isProfile && (
                <motion.div
                    className={styles.account}
                    initial={{ x: "-100%" }}
                    animate={{
                        x: "0%",
                    }}
                    exit={{ x: ["100%", "100%", "-100%"] }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.3,
                    }}
                    style={{
                        pointerEvents: isProfile ? "auto" : "none",
                        position: "absolute",
                    }}
                >
                    <div
                        className={styles.header}
                        style={
                            condition === "Болен"
                                ? { borderBottomColor: "#F7E6E8" }
                                : {}
                        }
                    >
                        <div onClick={() => setIsProfile(false)}>
                            <BackArrow />
                        </div>
                        <div>
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path
                                    d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
                                    stroke="#262626"
                                    stroke-width="1.75"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2.33301 15.0265V12.9732C2.33301 11.7598 3.32467 10.7565 4.54967 10.7565C6.66134 10.7565 7.52467 9.26318 6.46301 7.43151C5.85634 6.38151 6.21801 5.01651 7.27967 4.40984L9.29801 3.25484C10.2197 2.70651 11.4097 3.03318 11.958 3.95484L12.0863 4.17651C13.1363 6.00818 14.863 6.00818 15.9247 4.17651L16.053 3.95484C16.6013 3.03318 17.7913 2.70651 18.713 3.25484L20.7313 4.40984C21.793 5.01651 22.1547 6.38151 21.548 7.43151C20.4863 9.26318 21.3497 10.7565 23.4613 10.7565C24.6747 10.7565 25.678 11.7482 25.678 12.9732V15.0265C25.678 16.2398 24.6863 17.2432 23.4613 17.2432C21.3497 17.2432 20.4863 18.7365 21.548 20.5682C22.1547 21.6298 21.793 22.9832 20.7313 23.5898L18.713 24.7448C17.7913 25.2932 16.6013 24.9665 16.053 24.0448L15.9247 23.8232C14.8747 21.9915 13.148 21.9915 12.0863 23.8232L11.958 24.0448C11.4097 24.9665 10.2197 25.2932 9.29801 24.7448L7.27967 23.5898C6.21801 22.9832 5.85634 21.6182 6.46301 20.5682C7.52467 18.7365 6.66134 17.2432 4.54967 17.2432C3.32467 17.2432 2.33301 16.2398 2.33301 15.0265Z"
                                    stroke="#262626"
                                    stroke-width="1.75"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <MobileContainer>
                        <div
                            className={styles.notify}
                            style={{
                                border: sick
                                    ? "1px solid #D64657"
                                    : "1px solid #0064FA",
                            }}
                        >
                            <Text
                                type="p"
                                fz={TABLET ? "16px" : "14px"}
                                position="center"
                                color={sick ? "#D64657" : "#0064FA"}
                            >
                                До основной записи осталось 22:59
                            </Text>
                        </div>
                        <div className={classes}>
                            <Text
                                type="p"
                                fz={TABLET ? "16px" : "14px"}
                                color={sick ? "#D64657" : "#0064FA"}
                            >
                                Запись создана!
                            </Text>
                            <img
                                src={sick ? arrowRightRed : arrowRight}
                                alt=""
                            />
                        </div>
                        <div className={styles.data}>
                            <img src={man} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz={TABLET ? "20px" : "18px"}>
                                    Яковенко А. С.
                                </Text>
                                <Text
                                    type="p"
                                    color="#7D7F82"
                                    fz={TABLET ? "17px" : "15px"}
                                >
                                    Пользователь
                                </Text>
                            </div>
                        </div>
                        <div className={styles.params}>
                            {data.map((item) => (
                                <ParamsBlock
                                    key={item.id}
                                    onClick={() => navigate(item.navigate)}
                                    label={item.label}
                                    img={
                                        sick
                                            ? item.icon.sick
                                            : item.icon.healthy
                                    }
                                />
                            ))}
                        </div>
                    </MobileContainer>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileAccountPage;
