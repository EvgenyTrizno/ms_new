import { FC } from "react";

import {
    CustomMobileHeader,
    MobileCalendar,
    MobileContainer,
    MobileNote,
} from "@/widgets";
import { BackArrow, MobileSearch, Text } from "@/shared";

import styles from "./AccountMedicalCardPage.module.scss";

const AccountMedicalCardPage: FC = () => {
    return (
        <div className={styles.card}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow path="/m/account" />
                    <Text type="h2" fz="19px">
                        Медицинская карта
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.container}>
                    <MobileSearch
                        placeholder="Введите запрос"
                        filterBtn={false}
                    />
                    <MobileCalendar />
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            10 Октябрь
                        </Text>
                        <div className={styles.notes}>
                            <MobileNote />
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default AccountMedicalCardPage;
