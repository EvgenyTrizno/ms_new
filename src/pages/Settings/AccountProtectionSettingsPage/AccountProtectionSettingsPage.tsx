import { FC } from "react";
import { useNavigate } from "react-router";

import { CustomMobileHeader, MobileContainer } from "@/widgets";
import { Input, Text } from "@/shared";

import arrow from "/assets/arrow-left-black.svg";
import styles from "./AccountProtectionSettingsPage.module.scss";

export const AccountProtectionSettingsPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.protection}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <img
                        src={arrow}
                        alt=""
                        onClick={() => navigate("/m/settings/account")}
                    />
                    <Text type="h2" fz="19px">
                        Защита профиля
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Номер
                        </Text>
                        <Input
                            type="text"
                            placeholder="Введите номер"
                            borderRadius="15px"
                        />
                    </div>
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Почта
                        </Text>
                        <Input
                            type="text"
                            placeholder="Введите почту"
                            borderRadius="15px"
                        />
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};
