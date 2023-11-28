import { FC } from "react";

import { Slider } from "@/widgets";
import { CenterCard } from "../CenterCard";
import { SliderLayout } from "../SliderLayout";

export const CentersList: FC = () => {
    return (
        <SliderLayout
            sliderContent={
                <Slider>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <CenterCard key={item} />
                    ))}
                </Slider>
            }
            text="Центры"
        />
    );
};
