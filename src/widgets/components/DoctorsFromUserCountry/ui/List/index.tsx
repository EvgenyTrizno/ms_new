import { FC } from "react";

import { DoctorsList } from "@/entities/DoctorsList";
import { DoctorCard } from "@/widgets/components/DoctorCard";

export const List: FC = () => {
    return (
        <DoctorsList>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
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
