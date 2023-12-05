import { FC } from "react";
import { useCentersQuery } from "../../lib/hooks/useCentersQuery";

export const Centers: FC = () => {
    const { data } = useCentersQuery();

    return <>{data && data.data.center.map((item) => <li>{item.name}</li>)}</>;
};
