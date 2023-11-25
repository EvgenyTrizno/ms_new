import { FC, MouseEvent, useEffect, useState } from "react";

import { SMALL_LAPTOP } from "@/shared/utils";
import { useAuth } from "@/shared/model/store/auth";
import { Healthy } from "./ui/Healthy";
import { Sick } from "./ui/Sick";
import { PickDisease } from "@/features/PickDisease";
import { Btn } from "@/shared/ui/Btn";
import { useUserMutate } from "@/entities/User/lib/hooks/useUserMutate";

import styles from "./styles.module.scss";

interface ISwitcherProps {
    isHovered: boolean;
}

export const HealthyStatus: FC<ISwitcherProps> = ({ isHovered }) => {
    const [disease, setDisease] = useState<number[]>([]);
    const { user } = useAuth();
    const { mutate } = useUserMutate({ disease });
    const [condition, setCondition] = useState<number>(
        (user && user.disease.length) as number
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);

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

    const handleClick = () => {
        mutate();
        setIsOpen(false);
    };

    useEffect(() => {
        user && setCondition(user.disease.length);
    }, [user]);

    useEffect(() => {
        document.body.style.backgroundColor = !condition ? "" : "#FFFAFB";
    }, [condition]);

    return (
        <div
            className={
                !isHovered && SMALL_LAPTOP
                    ? `${styles.switcher} ${styles.close}`
                    : styles.switcher
            }
            style={{
                borderColor: condition ? "#F7E6E8" : "#EBF3FF",
                display: user && user.group.name === "Врачи" ? "none" : "",
            }}
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
                onClick={() => setIsOpen(true)}
            />
            <PickDisease
                text="Выберите заболевание"
                btns={
                    <Btn color="#0064FA" onClick={handleClick}>
                        Сохранить
                    </Btn>
                }
                setIsOpenModal={setIsOpen}
                setDisease={setDisease}
                isOpen={isOpen}
            />
        </div>
    );
};
