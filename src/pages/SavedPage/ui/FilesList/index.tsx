import { FC } from "react";
import { SliderLayout } from "../SliderLayout";
import { Slider } from "@/widgets";
import { File } from "../File";

export const FilesList: FC = () => {
    return (
        <SliderLayout
            text="Файлы"
            sliderContent={
                <Slider>
                    <File />
                    <File />
                </Slider>
            }
        />
    );
};
