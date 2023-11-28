import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { Appointment } from "../Appointment";

export const AppointmentsList: FC = () => {
    return (
        <Cols gap={8} type="auto" count={4}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <Appointment key={item} />
            ))}
        </Cols>
    );
};
