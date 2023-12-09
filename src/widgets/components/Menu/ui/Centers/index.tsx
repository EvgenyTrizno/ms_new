import { FC } from "react";
import { useNavigate } from "react-router";

import { useCentersQuery } from "../../lib/hooks/useCentersQuery";

export const Centers: FC = () => {
    const { data } = useCentersQuery();
    const navigate = useNavigate();

    return (
        <>
            {data?.data.center.map((item) => (
                <li
                    key={item.id}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/center/${item.id}`);
                    }}
                >
                    {item.name}
                </li>
            ))}
        </>
    );
};
