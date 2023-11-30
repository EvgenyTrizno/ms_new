import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

import { Layout } from "../Layout";
// import { GalleryModal, Filter } from "@/shared";
import { Comment, Circle, Slider } from "@/widgets";
import { Search } from "@/features/Search";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { DoctorCard } from "@/widgets/components/DoctorCard";

import virus from "/assets/virus-icon.jpg";
import photo from "/assets/photo.jpg";
import plus from "/assets/big-plus.svg";
import styles from "./styles.module.scss";
import { FilterBtn } from "@/shared/ui/FilterBtn";

const NotesInfoPage: FC = () => {
    // useEffect(() => {
    //     circlesRef.current = document.querySelector(
    //         "#statsCircle"
    //     ) as HTMLDivElement;

    //     function handleScroll(e: Event) {

    //     }

    //     if (circlesRef.current) {
    //         document.addEventListener("scroll", handleScroll);
    //     }
    // }, []);

    const sick = "Болен";
    // const circlesRef = useRef<HTMLDivElement>();

    const options = {
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            y: {
                grid: {
                    color: "#E9EAEB",
                    lineWidth: 1,
                    borderDash: [10, 10],
                },
            },

            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const labels = ["Класс А", "Класс А", "Класс А", "Класс А", "Класс А"];

    const data = {
        labels,
        datasets: [
            {
                data: [1, 10, 23, 2, 400],
                borderColor: "#D64657",
                borderRadius: "100%",
                borderWidth: 3,
                backgroundColor: "white",
                pointBorderColor: "#D64657",
                pointBorderWidth: 2,
            },
            {
                data: [10, 100, 23, 245, 1],
                borderColor: "#0064FA",
                backgroundColor: "white",
                borderWidth: 3,
                pointBorderColor: "#0064FA",
                pointBorderWidth: 2,
            },
        ],
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Search placeholder="Введите запрос" />
                    <FilterBtn onClick={() => ({})} type="small" />
                </div>
                <div className={styles.box}>
                    <div className={styles.info}>
                        <img src={virus} alt="" />
                        <div className={styles.data}>
                            <div className={styles.text}>
                                <Text type="h2" fz="24px">
                                    GGTD
                                </Text>
                                <Text type="p" color="#7D7F82" fz="18px">
                                    Изучено заболеваний: <span>50</span>
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.textItem}>
                                    <Text type="p" fz="18px">
                                        Наблюдалось:
                                    </Text>
                                    <Text type="p" fz="18px" color="#7D7F82">
                                        300 человек
                                    </Text>
                                </div>
                                <div className={styles.textItem}>
                                    <Text type="p" fz="18px">
                                        Лечилось:
                                    </Text>
                                    <Text type="p" fz="18px" color="#7D7F82">
                                        96 пациентов
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.textItem}>
                                    <Text type="p" fz="18px">
                                        Кол-во специалистов:
                                    </Text>
                                    <Text type="p" fz="18px" color="#7D7F82">
                                        11
                                    </Text>
                                </div>
                                <div className={styles.textItem}>
                                    <Text type="p" fz="18px">
                                        Успешно вылечилось:
                                    </Text>
                                    <Text type="p" fz="18px" color="#7D7F82">
                                        167 пациентов
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.nav}>
                        <Text type="p" color="#7D7F82">
                            Все сотрудники центра
                        </Text>
                    </div>
                    <Slider>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                            (item) => (
                                <DoctorCard
                                    name=""
                                    key={item}
                                    surname={""}
                                    patronymic={""}
                                    avatar={""}
                                    rank={""}
                                />
                            )
                        )}
                    </Slider>
                </div>
                <div className={styles.box}>
                    {/* <Filter data={["Онлайн", "Оффлайн"]} /> */}
                </div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.block}>
                            <Text type="p" color="#7D7F82" fz="14px">
                                Название
                            </Text>
                            <Text type="h2" fz="20px">
                                Центр Неврологии
                            </Text>
                            <div className={styles.statusWrapper}>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    Доступно:
                                </Text>
                                <div className={styles.status}>
                                    <Text type="p" fz="14px" color="#00CC5E">
                                        Online
                                    </Text>
                                    /
                                    <Text type="p" fz="14px" color="#D64657">
                                        Offline
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoItem}>
                                <Text type="p" color="#B1B2B4">
                                    Помогло на 80%:
                                </Text>
                                <Text type="p">1300</Text>
                            </div>
                            <div className={styles.infoItem}>
                                <Text type="p" color="#B1B2B4">
                                    Помогло на 60%:
                                </Text>
                                <Text type="p">1300</Text>
                            </div>
                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoItem}>
                                <Text type="p" color="#B1B2B4">
                                    Помогло на 40%:
                                </Text>
                                <Text type="p">1300</Text>
                            </div>
                            <div className={styles.infoItem}>
                                <Text type="p" color="#B1B2B4">
                                    Помогло на 20%:
                                </Text>
                                <Text type="p">1300</Text>
                            </div>
                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoItem}>
                                <Text type="p" color="#B1B2B4">
                                    Публикации:
                                </Text>
                                <Text type="p">1300</Text>
                            </div>
                            <div className={styles.infoItem}>
                                <Text type="p" color="#B1B2B4">
                                    Выбор специалиста:
                                </Text>
                                <Text type="p">На выбор</Text>
                            </div>
                        </div>
                        <div className={styles.inner}>
                            <Btn color="#0064FA" height="50px" width="126px">
                                Перейти
                            </Btn>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Статистика о записи
                    </Text>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div className={styles.stats} id="statsCircle">
                                <div className={styles.box} id="circle">
                                    <Circle
                                        percent={40}
                                        size={160}
                                        strokeWidth={12}
                                        circleColor={"#F2F4F5"}
                                        textColor="#000"
                                        percentColor={
                                            sick ? "#D64657" : "#FF8181"
                                        }
                                    />

                                    <div className={styles.text}>
                                        <Text type="h2" fz="16px">
                                            Помогло на 40%
                                        </Text>
                                        <Text
                                            type="p"
                                            fz="14px"
                                            color={sick ? "#D64657" : "#FF8181"}
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
                                        circleColor={"#F2F4F5"}
                                        textColor="#000"
                                        percentColor={
                                            sick ? "#D64657" : "#81B3FF"
                                        }
                                    />
                                    <div className={styles.text}>
                                        <Text type="h2" fz="16px">
                                            Помогло на 60%
                                        </Text>
                                        <Text
                                            type="p"
                                            fz="14px"
                                            color={sick ? "#D64657" : "#81B3FF"}
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
                        <div className={styles.right}>
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Публикации
                    </Text>
                    <div className={styles.gallery}>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={styles.photo}>
                                <img src={photo} alt="" />
                            </div>
                        ))}
                        <div className={`${styles.photo} ${styles.add}`}>
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
                {/* {isOpen && (
                    <GalleryModal
                        setIsOpen={setIsOpen}
                        images={[photo, photo, photo]}
                    />
                )} */}
            </div>
        </Layout>
    );
};

export default NotesInfoPage;
