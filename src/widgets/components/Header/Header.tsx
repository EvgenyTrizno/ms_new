import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IHeaderProps } from "./types";

import { Text } from "@/shared";
import { useMenu, useUserData } from "@/shared/model/store";
import { useUserCondition, useNotification } from "@/shared/model/store";
import { Balance } from "../Balance/Balance";

import notification from "/assets/notification.svg";
import notificationActive from "/assets/notification-active.svg";
import noimage from "/assets/noimage.svg";
import styles from "./Header.module.scss";

export const Header: FC<IHeaderProps> = ({ width }) => {
    const navigate = useNavigate();
    const { isSelect, setIsSelect } = useMenu();
    const { condition } = useUserCondition();
    const { img, group } = useUserData();
    const { setIsNotification, isNotification } = useNotification();

    const sick = condition === "Болен";

    return (
        <header className={styles.header} style={{ width }}>
            <div className={styles.nav}>
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <Text
                            fz="14px"
                            color={`${sick ? "#D64657" : "#0064FA"}`}
                            type="p"
                        >
                            {isSelect}
                        </Text>
                    </div>
                </div>
                <div className={styles.data}>
                    {group === "Врачи" && <Balance />}
                    <div className={styles.notification}>
                        {styles ? ( // заглушка
                            <img
                                src={notification}
                                alt=""
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsNotification(!isNotification);
                                }}
                            />
                        ) : (
                            <img src={notificationActive} alt="" />
                        )}
                    </div>
                    <img
                        src={img !== "" ? img : noimage}
                        alt=""
                        className={styles.avatar}
                        onClick={() => {
                            navigate("/profile");
                            setIsSelect("Аккаунт");
                        }}
                    />
                </div>
            </div>
        </header>
    );
};
