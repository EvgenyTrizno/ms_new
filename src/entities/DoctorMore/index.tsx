import { FC } from "react";
import styles from "./styles.module.scss";
import { Doctor } from "@/shared/types";
import BoxWrapper from "../BoxWrapper";
import { Characteristics } from "@/features";

type Props = {
    data: Doctor;
};

export const DoctorMore: FC<Props> = ({ data }) => {
    console.log(data)
    return (
        <BoxWrapper color="white">
            <div className={styles.wrapper}>
                <img className={styles.avatar} src={data.image || "/assets/doctor.svg"} alt="avatar" />

                <div className={styles.content}>
                    <h4>{`${data.middle_name} ${data.first_name} ${data.last_name?.charAt(0) + "."
                        }`}</h4>

                    <Characteristics
                        data={[
                            { key: "Страна", value: data?.country?.name || "-" },
                            { key: "Город", value: data.city?.name || "-" },
                            { key: "Специальность", value: data.specialization || "-" },
                            {
                                key: "Опыт работы",
                                value:
                                    (data.work_experience.endsWith("0")
                                        ? data.work_experience.charAt(0)
                                        : data.work_experience) + " лет" || "-",
                            },
                        ]}
                    />
                </div>
            </div>
        </BoxWrapper>
    );
};
