import { FC } from "react";

import { CustomMobileHeader, MobileContainer } from "@/widgets";
import { BackArrow, Input, Text } from "@/shared";

import styles from "./AccountProtectionSettingsPage.module.scss";

export const AccountProtectionSettingsPage: FC = () => {
    return (
        <div className={styles.protection}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/settings/account" />
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
