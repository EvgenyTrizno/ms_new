import { FC } from "react";

import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { MOBILE } from "@/shared/utils";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { useAuth } from "@/shared/model/store/auth";

import settings from "/assets/setting.svg";
import plane from "/assets/paper-plane.svg";
import arrow from "/assets/arrow-right-gray.svg";
import styles from "./NotesCard.module.scss";

export const NotesCard: FC = () => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <WhiteContentBlock className={`${styles.card} ${sick && styles.sick}`}>
            <div className={styles.header}>
                <div className={styles.item}>
                    <img src={settings} alt="" />
                </div>
                <div className={styles.item}>
                    <img src={plane} alt="" />
                </div>
                <div className={styles.item}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22.5 12C22.5 13.3789 22.2284 14.7443 21.7007 16.0182C21.1731 17.2921 20.3996 18.4496 19.4246 19.4246C18.4496 20.3996 17.2921 21.1731 16.0182 21.7007C14.7443 22.2284 13.3789 22.5 12 22.5C10.6211 22.5 9.25574 22.2284 7.98182 21.7007C6.7079 21.1731 5.55039 20.3996 4.57538 19.4246C3.60036 18.4496 2.82694 17.2921 2.29926 16.0182C1.77159 14.7443 1.5 13.3789 1.5 12C1.5 10.6211 1.77159 9.25574 2.29927 7.98182C2.82694 6.7079 3.60037 5.55039 4.57538 4.57538C5.5504 3.60036 6.70791 2.82694 7.98183 2.29926C9.25575 1.77159 10.6211 1.5 12 1.5C13.3789 1.5 14.7443 1.77159 16.0182 2.29927C17.2921 2.82694 18.4496 3.60037 19.4246 4.57538C20.3996 5.5504 21.1731 6.70791 21.7007 7.98183C22.2284 9.25575 22.5 10.6211 22.5 12L22.5 12Z"
                            stroke="url(#paint0_angular_1168_83102)"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-dasharray="0.08 6"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_angular_1168_83102"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(12 12) rotate(169.077) scale(10.5094 10.5094)"
                            >
                                <stop stop-color="#0064FA" stop-opacity="0" />
                                <stop offset="1" stop-color="#0064FA" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.item}>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.text}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Названия записи
                    </Text>
                    <Text type="h2" fz="17px">
                        Восстановление
                    </Text>
                </div>
                <ul className={styles.list}>
                    <li>
                        Формат:
                        <Text type="p" fz="13px" color="#00CC5E">
                            Online
                        </Text>
                    </li>
                    <li>
                        Предназначена:
                        <Text type="p" fz="13px" color="#262626">
                            Работа мышц спины
                        </Text>
                    </li>
                    <li>
                        Создана:
                        <Text type="p" fz="13px" color="#262626">
                            Неврологом И.И. (Московский центр)
                        </Text>
                    </li>
                    <li>
                        Версия:
                        <Text type="p" fz="13px" color="#262626">
                            USA
                        </Text>
                    </li>
                    <li>
                        Время:
                        <Text type="p" fz="13px" color="#262626">
                            Не установлено
                        </Text>
                    </li>
                </ul>
            </div>
            <div className={styles.btns}>
                <Btn
                    height={MOBILE ? "44px" : ""}
                    fz={MOBILE ? "13px" : ""}
                    br={MOBILE ? "12px" : ""}
                    color="transparent"
                    border="1px solid #0064FA"
                    textColor="#0064FA"
                >
                    Отменить
                </Btn>
                <Btn
                    height={MOBILE ? "44px" : ""}
                    fz={MOBILE ? "13px" : ""}
                    br={MOBILE ? "12px" : ""}
                    color="#0064FA"
                >
                    Отменить
                </Btn>
            </div>
        </WhiteContentBlock>
    );
};
