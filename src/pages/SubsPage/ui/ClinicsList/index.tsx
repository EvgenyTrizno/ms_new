import { FC } from "react";
import { SliderLayout } from "../SliderLayout";
import { Rows } from "@/shared/ui/Rows";
import { ClinicCard } from "../ClinicCard";

export const ClinicsList: FC = () => {
    return (
        <SliderLayout
            sliderContent={
                <Rows gap={10} rows={["auto"]}>
                    <ClinicCard />
                    <ClinicCard />
                </Rows>
            }
            text="Клиники"
        />
    );
};
