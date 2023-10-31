import { FC } from "react";

import { Filter } from "@/shared/ui/Filter";

export const SelectFormatOfNote: FC = () => {
    return <Filter width="100%" data={["Онлайн", "Оффлайн"]} />;
};
