import { FC } from "react";

import { Filter } from "@/shared/ui/Filter";

export const SetCondition: FC = () => {
    return <Filter data={["Здоров", "Болен"]} width="100%" />;
};
