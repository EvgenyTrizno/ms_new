import { FC, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

interface Props {
    children: ReactNode;
}

const client = new QueryClient();

export const ReactQuery: FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};
