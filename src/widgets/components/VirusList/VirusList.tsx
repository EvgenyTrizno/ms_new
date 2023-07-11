import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { Btn, Checkbox, Text } from "@/shared";
import { IVirusListData } from "@/shared/api/Virus/types";
import { Virus } from "@/shared/api/Virus";

import styles from "./VirusList.module.scss";

export const VirusList: FC = () => {
    // const { diseases } = useDiseases();
    const { getVirusList } = Virus();
    const navigate = useNavigate();
    const [data, setData] = useState<IVirusListData[]>();

    useEffect(() => {
        getVirusList().then((res) => setData(res));
    }, []);

    return (
        <div className={styles.virusList}>
            <Text type="h2" color="#262626" position="center" fz="28px">
                Выберите заболевание
            </Text>
            <ul className={styles.list}>
                {data?.map((item) => (
                    <li className={styles.item} key={item.id}>
                        <Checkbox />
                        <Text type="p" fz="10px" color="#7D7F82">
                            {item.name}
                        </Text>
                    </li>
                ))}
            </ul>
            <Btn color="#0064FA" onClick={() => navigate("/auth")}>
                Продолжить
            </Btn>
        </div>
    );
};
