import { FC } from "react";
import { useNavigate } from "react-router";

import { Calendar, MedicalBlock } from "@/widgets";
import { Layout } from "../Layout/Layout";
import { Text } from "@/shared";

import styles from "./NotesPage.module.scss";

const NotesPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Calendar height="max-content" width="100%" info={false} />
                    <div className={styles.list}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            10 Октябрь
                        </Text>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <MedicalBlock
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
