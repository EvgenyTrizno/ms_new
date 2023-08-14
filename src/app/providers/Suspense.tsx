import { Loader } from "@/widgets";
import { FC, ReactNode, Suspense } from "react";

interface Props {
    children: ReactNode;
}

export const PSuspense: FC<Props> = ({ children }): JSX.Element => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
