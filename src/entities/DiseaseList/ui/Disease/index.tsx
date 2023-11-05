import { FC, useState } from "react";

import { Checkbox } from "@/shared/ui/Checkbox";
import { IDisease } from "./types";
import { Row } from "@/shared/ui/Row";

export const Disease: FC<IDisease> = ({ disease, setDisease, diseaseId }) => {
    const [isSelect, setIsSelect] = useState<number[]>([]);

    const handleClick = () => {
        if (isSelect.includes(diseaseId)) {
            setIsSelect((prev) => prev.filter((item) => item !== diseaseId));
            setDisease((prev) => prev.filter((item) => item !== diseaseId));
        } else {
            setDisease((prev) => [...prev, diseaseId]);
            setIsSelect((prev) => [...prev, diseaseId]);
        }
    };

    return (
        <Row gap={10} onClick={handleClick}>
            <Checkbox checked={isSelect.includes(diseaseId)} />
            {disease}
        </Row>
    );
};
