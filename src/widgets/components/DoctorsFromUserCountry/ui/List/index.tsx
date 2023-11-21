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
                        key={item.id}
                        surname={item.last_name}
                        patronymic={item.middle_name}
                        avatar={item.image}
                        name={item.first_name}
                        rank={item.specialization}
                    />
                ))}
        </DoctorsList>
    );
};
