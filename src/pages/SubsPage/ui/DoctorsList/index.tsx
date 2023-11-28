import { FC } from "react";

import { SliderLayout } from "../SliderLayout";
import { Slider } from "@/widgets";
import { DoctorCard } from "../DoctorCard";

export const DoctorsList: FC = () => {
    return (
        <SliderLayout
            sliderContent={
                <Slider gap={10}>
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                </Slider>
            }
            text="Врачи"
        />
    );
};
