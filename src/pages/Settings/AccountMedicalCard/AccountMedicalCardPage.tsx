import { FC } from "react";

import {
    Calendar,
    CustomMobileHeader,
    MobileContainer,
    NoteBlock,
} from "@/widgets";
import { BackArrow, MobileSearch, Text } from "@/shared";
import { TABLET } from "@/shared/utils";

import styles from "./AccountMedicalCardPage.module.scss";

const AccountMedicalCardPage: FC = () => {
    return (
        <div className={styles.card}>
            <CustomMobileHeader back>
                <div className={styles.header}>
                    <BackArrow />
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
                    <Calendar info={false} />
                    <div className={styles.box}>
                        <Text
                            type="p"
                            fz={TABLET ? "16px" : "14px"}
                            color="#7D7F82"
                        >
                            10 Октябрь
                        </Text>
                        <div className={styles.notes}>
                            <NoteBlock />
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default AccountMedicalCardPage;
