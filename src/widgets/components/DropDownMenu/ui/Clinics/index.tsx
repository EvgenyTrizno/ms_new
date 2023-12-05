import { FC } from "react";
import { useClinicsQuery } from "../../lib/hooks/useClinicsQuery";

export const Clinics: FC = () => {
    const { data } = useClinicsQuery();

    return <>{data && data.data.clinic.map((item) => <li>{item.name}</li>)}</>;
};
