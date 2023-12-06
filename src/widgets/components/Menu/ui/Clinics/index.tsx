import { FC } from "react";
import { useCenicQuery } from "../../lib/hooks/useClinicsQuery";

export const Clinics: FC = () => {
    const { data } = useCenicQuery();

    return (
        <>
            {data?.data.clinic.map((item) => (
                <li onClick={(e) => e.stopPropagation()}>{item.name}</li>
            ))}
        </>
    );
};
