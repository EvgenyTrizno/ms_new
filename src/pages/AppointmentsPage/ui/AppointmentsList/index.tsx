import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { Appointment } from "../Appointment";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";

export const AppointmentsList: FC = () => {
    return (
        <Cols gap={8} type="auto" count={LAPTOP || SMALL_LAPTOP ? 2 : 4}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <Appointment key={item} />
            ))}
        </Cols>
    );
};
