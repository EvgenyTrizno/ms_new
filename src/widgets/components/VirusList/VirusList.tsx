import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router";

// import { Checkbox } from "@/shared";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { IVirusListData } from "@/shared/api/Virus/types";
import { Virus } from "@/shared/api/Virus";

import styles from "./VirusList.module.scss";
import { useUserData } from "@/shared/model/store";
import { Auth } from "@/shared/api/Auth";

export const VirusList: FC = () => {
    const [data, setData] = useState<IVirusListData[]>();

    const { getVirusList } = Virus();
    const { registration } = Auth();
    const {
        setDiseases,
        number,
        pass1,
        pass2,
        group,
        main_center,
        disease_id,
    } = useUserData();
    const navigate = useNavigate();

    useEffect(() => {
        getVirusList().then((res) => setData(res));
    }, []);

    console.log(number, pass1, pass2, group, main_center, disease_id);

    const handleClick = () => {
        registration(
            number,
            pass1,
            pass2,
            3,
            group,
            main_center as number,
            disease_id
        )
            .then((res) => console.log(res))
            .then(() => navigate("/auth/confirm"));
    };

    const handleSelectDisease = (id: number) => {
        if (disease_id.includes(id)) return;
        else {
            setDiseases(id);
        }
    };

    return (
        <div className={styles.virusList}>
            <Text type="h2" color="#262626" position="center" fz="28px">
                Выберите заболевание
            </Text>
            <ul className={styles.list}>
                {data?.map((item) => (
                    <li
                        className={styles.item}
                        key={item.id}
                        onClick={() => handleSelectDisease(item.id)}
                    >
                        {/* <Checkbox /> */}
                        <Text type="p" fz="10px" color="#7D7F82">
                            {item.name}
                        </Text>
                    </li>
                ))}
            </ul>
            <Btn color="#0064FA" onClick={handleClick}>
                Продолжить
            </Btn>
        </div>
    );
};
