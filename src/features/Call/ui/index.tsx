import { FC, useState } from "react";

import { Image } from "@/shared/ui/Image";

import call from "../assets/call-calling.svg";
import { PopUp } from "@/shared/ui/PopUp";

export const Call: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {isOpen && (
                <PopUp top="135px" right="20px">
                    <li>Аудиовызов</li>
                    <li>Видеовызов</li>
                    <li>Конференция</li>
                </PopUp>
            )}
            <Image
                onClick={() => setIsOpen((prev) => !prev)}
                src={call}
                alt="call"
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
            />
        </>
    );
};
