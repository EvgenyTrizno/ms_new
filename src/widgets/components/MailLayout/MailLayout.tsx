import { FC, ReactNode } from "react";
import { WhiteContentBlock } from "../../../shared/ui/WhiteContentBlock";

interface IMailLayout {
    children: ReactNode;
}

export const MailLayout: FC<IMailLayout> = ({ children }) => {
    return <WhiteContentBlock>{children}</WhiteContentBlock>;
};
