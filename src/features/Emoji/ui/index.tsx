import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import emoji from "../assets/emoji-normal.svg";
import emojiOpen from "../assets/emoji-open.svg";
import { IEmojiProps } from "../types";

export const Emoji: FC<IEmojiProps> = ({ isOpen, onClick }) => {
    return (
        <Image
            width={20}
            height={20}
            src={isOpen ? emojiOpen : emoji}
            alt="emoji"
            onClick={onClick}
        />
    );
};
