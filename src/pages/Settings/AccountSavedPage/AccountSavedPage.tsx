import { FC } from "react";

import { CustomMobileHeader, MobileContainer, Slider } from "@/widgets";
import { BackArrow, MobileSearch, Text } from "@/shared";

import dots from "/assets/dots-more.svg";
import file from "/assets/file.svg";
import thumbnail from "/assets/file-question.svg";
import photo from "/assets/center-icon.jpg";
import styles from "./AccountSavedPage.module.scss";
import { TABLET } from "@/shared/utils";

const AccountSavedPage: FC = () => {
    return (
        <div className={styles.saved}>
            <CustomMobileHeader back>
                <div className={styles.header}>
                    <BackArrow />
                    <Text type="h2" fz="19px">
                        Сохраненное
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <MobileSearch placeholder="Введите запрос" filterBtn={false} />
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Text
                            type="p"
                            fz={TABLET ? "16px" : "14px"}
                            color="#7D7F82"
                        >
                            Файлы
                        </Text>
                        <Slider>
                            <div className={styles.file}>
                                <div className={styles.content}>
                                    <div className={styles.thumbnail}>
                                        <img src={thumbnail} alt="" />
                                    </div>
                                </div>
                                <div className={styles.name}>
                                    <img src={file} alt="" />
                                    <Text type="p" fz="15px">
                                        lorem.img
                                    </Text>
                                    <img src={dots} alt="" />
                                </div>
                            </div>
                            <div className={styles.file}>
                                <div className={styles.content}>
                                    <div className={styles.thumbnail}>
                                        <img src={thumbnail} alt="" />
                                    </div>
                                </div>
                                <div className={styles.name}>
                                    <img src={file} alt="" />
                                    <Text type="p" fz="15px">
                                        lorem.img
                                    </Text>
                                    <img src={dots} alt="" />
                                </div>
                            </div>
                            <div className={styles.file}>
                                <div className={styles.content}>
                                    <div className={styles.thumbnail}>
                                        <img src={thumbnail} alt="" />
                                    </div>
                                </div>
                                <div className={styles.name}>
                                    <img src={file} alt="" />
                                    <Text type="p" fz="15px">
                                        lorem.img
                                    </Text>
                                    <img src={dots} alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className={styles.box}>
                        <Text
                            type="p"
                            fz={TABLET ? "16px" : "14px"}
                            color="#7D7F82"
                        >
                            Публиации
                        </Text>
                        <div className={styles.inner}>
                            <div className={styles.col}>
                                <div className={styles.folder}>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h2" fz="14px">
                                        Публикация
                                    </Text>
                                    <Text type="p" fz="10px">
                                        Описание
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.folder}>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                    <div className={styles.preview}>
                                        <img src={photo} alt="" />
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h2" fz="14px">
                                        Публикация
                                    </Text>
                                    <Text type="p" fz="10px">
                                        Описание
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default AccountSavedPage;
