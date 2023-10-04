import { FC } from "react";
import { ColsProps } from "./types";

export const Cols: FC<ColsProps> = ({ children, count, type }) => {
    return (
        <>
            {type === "auto" && (
                <div style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
                    {children}
                </div>
            )}
            {type === "custom" && <div>{children}</div>}
        </>
    );
};
