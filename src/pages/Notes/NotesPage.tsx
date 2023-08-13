import { FC } from "react";
import { useNavigate } from "react-router";

import { Calendar, Search, NoteBlock } from "@/widgets";
import { Layout } from "../Layout/Layout";
import { Btn, Text } from "@/shared";

import addCircle from "/assets/add-circle.svg";
import styles from "./NotesPage.module.scss";

const NotesPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Search placeholder="Введите запрос" />
                    <Btn
                        color="#0064FA"
                        width="60px"
                        onClick={() => navigate("/select-center-map")}
                        padding="0"
                    >
                        <img src={addCircle} alt="" />
                    </Btn>
                </div>
                <div className={styles.wrapper}>
                    <Calendar height="500px" info={false} />
                    <div className={styles.list}>
                        <Text type="p" color="#7D7F82">
                            10 Октябрь
                        </Text>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <NoteBlock
                                onClick={() => navigate(`/notes/${item}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotesPage;
