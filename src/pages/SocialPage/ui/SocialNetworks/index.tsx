import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { SocialNetworkInfoLayout } from "../SocialNetworkInfoLayout";

import telegram from "./assets/telegram-icon.svg";
import { MOBILE, TABLET } from "@/shared/utils";

export const SocialNetworks: FC = () => {
    return (
        <Cols gap={MOBILE || TABLET ? 5 : 10} type={"auto"} count={2}>
            <SocialNetworkInfoLayout
                icon={telegram}
                subs={0}
                unreadedMessages={0}
            />
            <SocialNetworkInfoLayout
                icon={telegram}
                subs={0}
                unreadedMessages={0}
            />
            <SocialNetworkInfoLayout
                icon={telegram}
                subs={0}
                unreadedMessages={0}
            />
            <SocialNetworkInfoLayout
                icon={telegram}
                subs={0}
                unreadedMessages={0}
            />
        </Cols>
    );
};
