import { CSSProperties, FC, ReactNode, Suspense } from "react";

interface Props {
    children: ReactNode;
}

export const PSuspense: FC<Props> = ({ children }): JSX.Element => {
    const containerStyle: CSSProperties = {
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <Suspense fallback={<div style={containerStyle}></div>}>
            {children}
        </Suspense>
    );
};
