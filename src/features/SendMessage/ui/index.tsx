import { FC } from "react";
import { ISendMessageProps } from "../types";

import { Image } from "@/shared/ui/Image";

import sender from "../assets/send-blue.svg";

export const SendMessage: FC<ISendMessageProps> = ({ onClick }) => {
    return <Image src={sender} alt="send message" onClick={onClick} />;
};
