import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import paperclip from "../assets/paperclip-blue.svg";

export const Attachment: FC = () => {
    return <Image src={paperclip} alt="" />;
};
