import { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import { MobileContainer } from "@/widgets";
import { useUserCondition } from "@/shared/model/store";
import { BackArrow, Text } from "@/shared";
import { useProfile } from "@/shared/model/store";

import man from "/assets/man.jpg";
import styles from "./MobileAccountPage.module.scss";

const MobileAccountPage: FC = () => {
    const { condition } = useUserCondition();
    const { isProfile, setIsProfile } = useProfile();
    const navigate = useNavigate();

    const arrowRight = (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.92893 2.92893L15 10L7.92893 17.0711"
                stroke="#B1B2B4"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

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
                            <BackArrow path="/m/" />
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
                        <div className={styles.data}>
                            <img src={man} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz="18px">
                                    Яковенко А. С.
                                </Text>
                                <Text type="p" color="#7D7F82" fz="15px">
                                    Пользователь
                                </Text>
                            </div>
                        </div>
                        <div className={styles.params}>
                            <div
                                onClick={() => navigate("/m/settings/account")}
                                className={
                                    condition === "Болен"
                                        ? `${styles.item} ${styles.icon_red}`
                                        : `${styles.item}`
                                }
                            >
                                <div className={styles.box}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M9.99967 9.99984C12.3009 9.99984 14.1663 8.13436 14.1663 5.83317C14.1663 3.53198 12.3009 1.6665 9.99967 1.6665C7.69849 1.6665 5.83301 3.53198 5.83301 5.83317C5.83301 8.13436 7.69849 9.99984 9.99967 9.99984Z"
                                                stroke="#0064FA"
                                                stroke-width="1.25"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                                                stroke="#0064FA"
                                                stroke-width="1.25"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Аккаунт
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={
                                    condition === "Болен"
                                        ? `${styles.item} ${styles.icon_red}`
                                        : `${styles.item}`
                                }
                                onClick={() => navigate("/m/notes")}
                            >
                                <div className={styles.box}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M13.3337 1.6665H6.66699C3.33366 1.6665 1.66699 3.33317 1.66699 6.6665V17.4998C1.66699 17.9582 2.04199 18.3332 2.50033 18.3332H13.3337C16.667 18.3332 18.3337 16.6665 18.3337 13.3332V6.6665C18.3337 3.33317 16.667 1.6665 13.3337 1.6665Z"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10.7583 6.53346L6.43332 10.8585C6.26666 11.0251 6.10833 11.3501 6.07499 11.5835L5.84166 13.2335C5.75833 13.8335 6.17499 14.2501 6.77499 14.1668L8.42498 13.9335C8.65831 13.9001 8.98333 13.7418 9.15 13.5751L13.475 9.25013C14.2167 8.50846 14.575 7.64179 13.475 6.54179C12.375 5.43346 11.5083 5.78346 10.7583 6.53346Z"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10.1416 7.1499C10.5083 8.45824 11.5333 9.49157 12.8499 9.85824"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Записи
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                onClick={() =>
                                    navigate("/m/account/medical-card")
                                }
                                className={
                                    condition === "Болен"
                                        ? `${styles.item} ${styles.icon_red}`
                                        : `${styles.item}`
                                }
                            >
                                <div className={styles.box}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.66699 10.1665H12.5003"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6.66699 13.5H10.317"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M8.33366 4.99984H11.667C13.3337 4.99984 13.3337 4.1665 13.3337 3.33317C13.3337 1.6665 12.5003 1.6665 11.667 1.6665H8.33366C7.50033 1.6665 6.66699 1.6665 6.66699 3.33317C6.66699 4.99984 7.50033 4.99984 8.33366 4.99984Z"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M13.3333 3.3501C16.1083 3.5001 17.5 4.5251 17.5 8.33343V13.3334C17.5 16.6668 16.6667 18.3334 12.5 18.3334H7.5C3.33333 18.3334 2.5 16.6668 2.5 13.3334V8.33343C2.5 4.53343 3.89167 3.5001 6.66667 3.3501"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Медицинская карта
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={
                                    condition === "Болен"
                                        ? `${styles.item} ${styles.icon_red}`
                                        : `${styles.item}`
                                }
                            >
                                <div className={styles.box}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z"
                                                stroke="#0064FA"
                                                stroke-width="1.5"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Местоположение
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                            <div
                                className={
                                    condition === "Болен"
                                        ? `${styles.item} ${styles.icon_red}`
                                        : `${styles.item}`
                                }
                            >
                                <div className={styles.box}>
                                    <div className={styles.icon}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.7001 18.5586H12.5918C8.89176 18.5586 7.10843 17.1002 6.80009 13.8336C6.76676 13.4919 7.01676 13.1836 7.36676 13.1502C7.70009 13.1169 8.01676 13.3752 8.05009 13.7169C8.29176 16.3336 9.52509 17.3086 12.6001 17.3086H12.7084C16.1001 17.3086 17.3001 16.1086 17.3001 12.7169V7.28356C17.3001 3.89189 16.1001 2.69189 12.7084 2.69189H12.6001C9.50843 2.69189 8.27509 3.68356 8.05009 6.35023C8.00843 6.69189 7.71676 6.95023 7.36676 6.91689C7.01676 6.89189 6.76676 6.58356 6.79176 6.24189C7.07509 2.92523 8.86676 1.44189 12.5918 1.44189H12.7001C16.7918 1.44189 18.5418 3.19189 18.5418 7.28356V12.7169C18.5418 16.8086 16.7918 18.5586 12.7001 18.5586Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M12.4999 10.625H3.0166C2.67493 10.625 2.3916 10.3417 2.3916 10C2.3916 9.65833 2.67493 9.375 3.0166 9.375H12.4999C12.8416 9.375 13.1249 9.65833 13.1249 10C13.1249 10.3417 12.8416 10.625 12.4999 10.625Z"
                                                fill="#0064FA"
                                            />
                                            <path
                                                d="M4.87454 13.4167C4.71621 13.4167 4.55788 13.3584 4.43288 13.2334L1.64121 10.4417C1.39954 10.2 1.39954 9.80003 1.64121 9.55837L4.43288 6.7667C4.67454 6.52503 5.07454 6.52503 5.31621 6.7667C5.55788 7.00837 5.55788 7.40837 5.31621 7.65003L2.96621 10L5.31621 12.35C5.55788 12.5917 5.55788 12.9917 5.31621 13.2334C5.19954 13.3584 5.03288 13.4167 4.87454 13.4167Z"
                                                fill="#0064FA"
                                            />
                                        </svg>
                                    </div>
                                    <Text type="p" fz="15px">
                                        Выход
                                    </Text>
                                </div>
                                {arrowRight}
                            </div>
                        </div>
                    </MobileContainer>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileAccountPage;
