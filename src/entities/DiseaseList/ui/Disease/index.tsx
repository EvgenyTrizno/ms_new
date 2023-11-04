import { FC } from "react";

import { Checkbox } from "@/shared/ui/Checkbox";
import { IDisease } from "./types";
import { Row } from "@/shared/ui/Row";

export const Disease: FC<IDisease> = ({ disease, setDisease, diseaseId }) => {
    return (
        <Row
            gap={10}
            onClick={() => setDisease((prev) => [...prev, diseaseId])}
        >
            <Checkbox />
            {disease}
        </Row>
    );
};
