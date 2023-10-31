import { FC, useEffect, useState } from "react";

import { Text } from "@/shared/ui/Text";

export const Timer: FC = () => {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    });

    return (
        <Text type="p" position="center" color="#262626" fz="24px">
            {seconds === 0 ? (
                <span
                    style={{
                        cursor: "pointer",
                        fontSize: 14,
                        fontWeight: 600,
                    }}
                >
                    Отправить код снова
                </span>
            ) : seconds === 60 ? (
                "1:00"
            ) : (
                `00:${seconds < 10 ? `0${seconds}` : seconds}`
            )}
        </Text>
    );
};
