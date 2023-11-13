import { FC } from "react";

import { DoctorsList } from "@/entities/DoctorsList";
import { DoctorCard } from "@/widgets/components/DoctorCard";
import { useDoctorsQuery } from "../../lib/hooks/useDoctorsQuery";

export const List: FC = () => {
    const { data } = useDoctorsQuery();

    return (
        <DoctorsList>
            {data &&
                data.data.map((item) => (
                    <DoctorCard
                        key={item}
                        surname="Яковенко"
                        patronymic={"Сергеевна"}
                        avatar={""}
                        name={"Анастасия"}
                        rank={"хирург"}
                    />
                ))}
        </DoctorsList>
    );
};
