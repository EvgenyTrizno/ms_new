import { FC } from "react";
import { ColsProps } from "./types";

export const Cols: FC<ColsProps> = ({
    children,
    count = 2,
    type,
    gap,
    style,
    cols,
    className,
}) => {
    return (
        <>
            {type === "auto" && (
                <div
                    style={{
                        ...style,
                        display: "grid",
                        gridTemplateColumns: `repeat(${count}, 1fr)`,
                        gridGap: gap,
                    }}
                    className={className}
                >
                    {children}
                </div>
            )}
            {type === "custom" && (
                <div
                    style={{
                        ...style,
                        display: "grid",
                        gridTemplateColumns: cols?.join(" "),
                        gridGap: gap,
                    }}
                    className={className}
                >
                    {children}
                </div>
            )}
        </>
    );
};
