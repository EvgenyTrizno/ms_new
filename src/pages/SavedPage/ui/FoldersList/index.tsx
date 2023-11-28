import { FC } from "react";

import { SliderLayout } from "../SliderLayout";
import { Folder } from "../Folder";
import { Slider } from "@/widgets";

export const FoldersList: FC = () => {
    return (
        <SliderLayout
            text="Публикации"
            sliderContent={
                <Slider gap={16}>
                    <Folder />
                    <Folder />
                    <Folder />
                </Slider>
            }
        />
    );
};
