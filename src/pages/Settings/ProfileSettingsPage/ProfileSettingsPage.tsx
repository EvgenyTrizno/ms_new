import { FC } from "react";
import { useNavigate } from "react-router";

import { CustomMobileHeader, MobileContainer } from "@/widgets";
import { Input, Text } from "@/shared";

import arrow from "/assets/arrow-left-black.svg";
import man from "/assets/man.jpg";
import pencilBlue from "/assets/pencil-blue.svg";
import styles from "./ProfileSettingsPage.module.scss";

export const ProfileSettingsPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.profile}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <img
                        src={arrow}
                        alt=""
                        onClick={() => navigate("/m/settings/account")}
                    />
                    <Text type="h2" fz="19px">
                        Профиль
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.avatar}>
                    <img src={man} alt="" className={styles.img} />
                    <div className={styles.edit}>
                        <img src={pencilBlue} alt="" />
                    </div>
                </div>
                <div className={styles.inputs}>
                    <Input
                        type="text"
                        placeholder="Имя"
                        height="50px"
                        borderRadius="15px"
                    />
                </div>
            </MobileContainer>
        </div>
    );
};
