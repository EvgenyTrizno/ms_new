import { FC } from "react";
import { ColsProps } from "./types";

export const Cols: FC<ColsProps> = ({
    children,
    count = 2,
    type,
    gap,
    cols,
}) => {
    console.log(cols?.join(" "));
    return (
        <>
            {type === "auto" && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${count}, 1fr)`,
                        gridGap: gap,
                    }}
                >
                    {children}
                </div>
            )}
            {type === "custom" && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: cols?.join(" "),
                        gridGap: gap,
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};
