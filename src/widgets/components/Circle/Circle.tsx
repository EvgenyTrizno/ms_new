import { FC, useRef, useEffect } from "react";
import { ICircleProps } from "./types";

export const Circle: FC<ICircleProps> = ({
    percent,
    size,
    strokeWidth,
    circleColor,
    percentColor,
    textColor,
    fontSize,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = (1 - percent / 100) * circumference;
    const circleRef = useRef<SVGCircleElement | null>(null);

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.transition =
                "stroke-dashoffset 1s ease-in-out";
            circleRef.current.style.strokeDashoffset = offset.toString();
        }
    }, [offset]);

    return (
        <svg width={size} height={size}>
            <circle
                r={radius}
                cx={size / 2}
                cy={size / 2}
                fill="none"
                strokeWidth={strokeWidth}
                stroke={circleColor}
            />
            <circle
                ref={circleRef}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                fill="none"
                strokeWidth={strokeWidth}
                stroke={percentColor}
                strokeDasharray={circumference.toString()}
                strokeLinecap="round"
                style={{ strokeDashoffset: circumference.toString() }}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize={fontSize || "20px"}
                fill={textColor}
            >
                {percent}%
            </text>
        </svg>
    );
};
