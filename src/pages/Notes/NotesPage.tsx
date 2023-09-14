import { FC } from "react";
import { useNavigate } from "react-router";

import { Layout } from "../Layout/Layout";
import { Filter, Text, Btn } from "@/shared";
import { NoteBlock, Search } from "@/widgets";

import ghost from "/assets/ghost.svg";
import addCircle from "/assets/add-circle.svg";
import styles from "./NotesPage.module.scss";

const NotesPage: FC = () => {
    const data = [1, 2, 3, 4];
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.notes}>
                <div className={styles.header}>
                    <Search placeholder="Введите запрос" height="48px" />
                    <Btn
                        color="#0064FA"
                        width="48px"
                        height="48px"
                        onClick={() => navigate("/create-event")}
                        padding="14px"
                        br="12px"
                    >
                        <img src={addCircle} alt="" />
                    </Btn>
                </div>
                <Filter data={["Текущие", "Доп.проверка"]} />
                <div
                    className={styles.items}
                    style={
                        data.length === 0
                            ? { display: "block" }
                            : { display: "grid" }
                    }
                >
                    {data.length === 0 ? (
                        <div className={styles.empty}>
                            <div className={styles.inner}>
                                <img src={ghost} alt="" />
                                <Text type="h2" color="#262626" fz="32px">
                                    Ничего нет
                                </Text>
                                <div className={styles.text}>
                                    <Text
                                        type="p"
                                        fz="24px"
                                        position="center"
                                        color="#26262680"
                                    >
                                        Список пуст, создайте запись нажав на
                                        кнопку “Плюс”
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {data.map((item) => (
                                <NoteBlock key={item} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default NotesPage;
