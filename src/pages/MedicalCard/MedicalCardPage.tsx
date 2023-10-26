import { FC } from "react";
import { useNavigate } from "react-router";

import { Calendar, MedicalBlock } from "@/widgets";
import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";

import styles from "./MedicalCardPage.module.scss";

const MedicalCardPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <Calendar
                            height="max-content"
                            width="100%"
                            info={false}
                        />
                    </div>
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

export default MedicalCardPage;
