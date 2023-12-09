import { FC } from "react";
import { useNavigate } from "react-router";

import { useCenicQuery } from "../../lib/hooks/useClinicsQuery";

export const Clinics: FC = () => {
    const { data } = useCenicQuery();
    const navigate = useNavigate();

    return (
        <>
            {data?.data.clinic.map((item) => (
                <li
                    key={item.id}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/clinic/${item.id}`);
                    }}
                >
                    {item.name}
                </li>
            ))}
        </>
    );
};
