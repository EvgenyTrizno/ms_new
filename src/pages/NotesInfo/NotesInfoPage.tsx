import { FC, useState } from "react";

import { Layout } from "../Layout/Layout";
import { Btn, Text, GalleryModal } from "@/shared";
import { Card, Comment, Circle, Slider } from "@/widgets";
// import { Auth } from "../../shared/api/Auth";

import virus from "/assets/virus-icon.jpg";
import photo from "/assets/photo.jpg";
import plus from "/assets/big-plus.svg";
import styles from "./NotesInfoPage.module.scss";

const NotesInfoPage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const { createAdmin } = Auth();

    // useEffect(() => {
    //     createAdmin(
    //         "+123456789",
    //         "test@gmail.com",
    //         "test123",
    //         "test123",
    //         "User",
    //         "User"
    //     );
    // });

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Информация о центре
                    </Text>
                    <div className={styles.info}>
                        <div className={styles.box}>
                            <div className={styles.header}>
                                <div className={styles.data}>
                                    <img src={virus} alt="" />
                                    <div className={styles.text}>
                                        <Text type="h2" fz="24px">
                                            GGTD
                                        </Text>
                                        <Text
                                            type="p"
                                            color="#7D7F82"
                                            fz="18px"
                                        >
                                            Изучено заболеваний: <span>50</span>
                                        </Text>
                                    </div>
                                </div>
                                <Btn color="#0064FA" width="140px">
                                    Написать
                                </Btn>
                            </div>
                            <div className={styles.address}>
                                <div className={styles.box}>
                                    <Text type="p" color="#7D7F82" fz="14px">
                                        Адрес:
                                    </Text>
                                    <Text type="p">
                                        Россия, Москва, Ленина 47
                                    </Text>
                                </div>
                                <div className={styles.box}>
                                    <Text type="p" color="#7D7F82" fz="14px">
                                        Телефон:
                                    </Text>
                                    <Text type="p">+8 (988) 789-87-89</Text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    Информация о процедуре:
                                </Text>
                                <Text type="p">
                                    Lorem Ipsum является текст-заполнитель
                                    обычно используется в графических, печать и
                                    издательской индустрии для... Lorem Ipsum
                                    является текст-заполнитель обычно
                                    используется в графических, печать и
                                    издательской индустрии для...
                                </Text>
                            </div>
                            <div className={styles.btn}>
                                <Btn color="#0064FA" width="160px">
                                    Записаться
                                </Btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.nav}>
                        <Text type="p" color="#7D7F82">
                            Специалисты
                        </Text>
                    </div>
                    <Slider container="1500px">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                            (item) => (
                                <Card checkbox={false} key={item} />
                            )
                        )}
                    </Slider>
                </div>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Статистика о записи
                    </Text>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div className={styles.stats}>
                                <div className={styles.box}>
                                    <Circle
                                        percent={40}
                                        size={160}
                                        strokeWidth={12}
                                        circleColor="#F2F4F5"
                                        textColor="#000"
                                        percentColor="#FF8181"
                                    />

                                    <div className={styles.text}>
                                        <Text type="h2" fz="16px">
                                            Помогло на 40%
                                        </Text>
                                        <Text
                                            type="p"
                                            fz="14px"
                                            color="#FF8181"
                                        >
                                            600 пациентов
                                        </Text>
                                    </div>
                                </div>
                                <div className={styles.box}>
                                    <Circle
                                        percent={60}
                                        size={160}
                                        strokeWidth={12}
                                        circleColor="#F2F4F5"
                                        textColor="#000"
                                        percentColor="#81B3FF"
                                    />
                                    <div className={styles.text}>
                                        <Text type="h2" fz="16px">
                                            Помогло на 60%
                                        </Text>
                                        <Text
                                            type="p"
                                            fz="14px"
                                            color="#81B3FF"
                                        >
                                            600 пациентов
                                        </Text>
                                    </div>
                                </div>
                                <div className={styles.box}>
                                    <Circle
                                        percent={80}
                                        size={160}
                                        strokeWidth={12}
                                        circleColor="#F2F4F5"
                                        textColor="#000"
                                        percentColor="#3BB948"
                                    />
                                    <div className={styles.text}>
                                        <Text type="h2" fz="16px">
                                            Помогло на 80%
                                        </Text>
                                        <Text
                                            type="p"
                                            fz="14px"
                                            color="#3BB948"
                                        >
                                            600 пациентов
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Публикации
                    </Text>
                    <div className={styles.gallery}>
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className={styles.photo}
                                onClick={() => setIsOpen(true)}
                            >
                                <img src={photo} alt="" />
                            </div>
                        ))}
                        <div className={`${styles.photo} ${styles.add}`}>
                            <img src={photo} alt="" className={styles.bg} />
                            <img src={plus} alt="" className={styles.btn} />
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.comments}>
                        <div className={styles.header}>
                            <Text type="p" color="#7D7F82">
                                Отзывы пользователей
                            </Text>
                            <Text type="p" color="#7D7F82">
                                Посмотреть все
                            </Text>
                        </div>
                        <div className={styles.items}>
                            <Comment
                                name="Александр Петров"
                                title="Классные специалисты!"
                            >
                                Lorem Ipsum является текст-заполнитель обычно
                                используется в графических, печать и
                                издательской индустрии для...
                            </Comment>
                            <Comment
                                name="Александр Петров"
                                title="Классные специалисты!"
                            >
                                Lorem Ipsum является текст-заполнитель обычно
                                используется в графических, печать и
                                издательской индустрии для...
                            </Comment>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <GalleryModal
                        setIsOpen={setIsOpen}
                        images={[photo, photo, photo]}
                    />
                )}
            </div>
        </Layout>
    );
};

export default NotesInfoPage;
