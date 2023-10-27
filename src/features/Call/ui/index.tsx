import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import call from "../assets/call-calling.svg";

export const Call: FC = () => {
    return (
        <Image
            src={call}
            alt="call"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
        />
    );
};
