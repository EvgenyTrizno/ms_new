import { Dispatch, FC, SetStateAction } from "react";

import { Filter } from "@/shared/ui/Filter";
import { ISetConditionPropos } from "./types";

export const SetCondition: FC<ISetConditionPropos> = ({
    setCondition,
    condition,
}) => {
    return (
        <Filter
            isSelect={condition}
            setIsSelect={setCondition as Dispatch<SetStateAction<string>>}
            data={["Здоров", "Болен"]}
            width="100%"
        />
    );
};
