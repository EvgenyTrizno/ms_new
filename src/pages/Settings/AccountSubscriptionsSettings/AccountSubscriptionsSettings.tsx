import { FC } from "react";

import { CustomMobileHeader, MobileContainer, Slider } from "@/widgets";
import { BackArrow, MobileSearch, Text } from "@/shared";

import poster from "/assets/center-icon.jpg";
import styles from "./AccountSubscriptionsSettings.module.scss";

export const AccountSubscriptionsSettingsPage: FC = () => {
    return (
        <div className={styles.subs}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/settings/account" />
                    <Text type="h2" fz="19px">
                        Подписки
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <MobileSearch placeholder="Введите запрос" filterBtn={false} />
                <div className={styles.container}>
                    <div className={styles.block}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Центры
                        </Text>
                        <Slider navigate={false} container="100%">
                            <div className={styles.card}>
                                <img src={poster} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};
