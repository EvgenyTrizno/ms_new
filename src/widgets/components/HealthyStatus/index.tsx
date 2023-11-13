import { FC, MouseEvent, useEffect, useState } from "react";

import { SMALL_LAPTOP } from "@/shared/utils";
import { useAuth } from "@/shared/model/store/auth";
import { Healthy } from "./ui/Healthy";
import { Sick } from "./ui/Sick";

import styles from "./styles.module.scss";

interface ISwitcherProps {
    isHovered: boolean;
}

export const HealthyStatus: FC<ISwitcherProps> = ({ isHovered }) => {
    const { user } = useAuth();
    const [condition, setCondition] = useState<number>(0);

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        const classList = e.currentTarget.classList;

        if (
            classList.contains(styles.item) &&
            !classList.contains(styles.healthy) &&
            !classList.contains(styles.sick)
        ) {
            classList.add(styles.hover);
        } else {
            return;
        }
    };

    const handleMousleLeave = (e: MouseEvent<HTMLDivElement>) => {
        const classList = e.currentTarget.classList;

        if (classList.contains(styles.hover)) {
            classList.remove(styles.hover);
        }
    };

    useEffect(() => {
        user && setCondition(user.disease.length);
    }, [user]);

    return (
        <div
            className={
                !isHovered && SMALL_LAPTOP
                    ? `${styles.switcher} ${styles.close}`
                    : styles.switcher
            }
            style={
                condition
                    ? { borderColor: "#F7E6E8" }
                    : { borderColor: "#EBF3FF" }
            }
        >
            <Healthy
                condition={condition}
                handleMouseEnter={handleMouseEnter}
                handleMousleLeave={handleMousleLeave}
                isHovered={isHovered}
            />
            <Sick
                condition={condition}
                handleMouseEnter={handleMouseEnter}
                handleMousleLeave={handleMousleLeave}
            />
        </div>
    );
};
