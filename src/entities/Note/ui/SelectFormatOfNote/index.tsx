import { FC, useState } from "react";

import { Filter } from "@/shared/ui/Filter";

export const SelectFormatOfNote: FC = () => {
    const [isSelect, setIsSelect] = useState<string>("Онлайн");
    return (
        <Filter
            isSelect={isSelect}
            setIsSelect={setIsSelect}
            width="100%"
            data={["Онлайн", "Оффлайн"]}
        />
    );
};
