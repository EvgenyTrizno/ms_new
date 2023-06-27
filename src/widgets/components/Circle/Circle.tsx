import { FC } from "react";
import { ICircleProps } from "./types";

export const Circle: FC<ICircleProps> = ({
    percent,
    size,
    strokeWidth,
    circleColor,
    percentColor,
    textColor,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = (1 - percent / 100) * circumference;

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
                r={radius}
                cx={size / 2}
                cy={size / 2}
                fill="none"
                strokeWidth={strokeWidth}
                stroke={percentColor}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform={`rotate(90 ${size / 2} ${size / 2})`}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="20px"
                fill={textColor}
            >
                {percent}%
            </text>
        </svg>
    );
};
