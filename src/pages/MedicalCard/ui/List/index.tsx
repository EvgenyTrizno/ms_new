import { FC } from "react";
import { useNavigate } from "react-router";

import { Rows } from "@/shared/ui/Rows";
import { MedicalBlock } from "../MedicalBlock";

export const List: FC = () => {
    const navigate = useNavigate();

    return (
        <Rows gap={16} rows={["auto"]}>
            {[1, 2, 3, 4, 5].map((item) => (
                <MedicalBlock onClick={() => navigate(`/notes/${item}`)} />
            ))}
        </Rows>
    );
};
