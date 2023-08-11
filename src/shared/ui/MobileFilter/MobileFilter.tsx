import { FC, useEffect } from "react";
import { IFilter } from "../Filter/types";

import { useFilter, useUserCondition } from "@/shared/model/store";
import { Text } from "../Text/Text";

import styles from "./MobileFilter.module.scss";

export const MobileFilter: FC<IFilter> = ({ data }) => {
    const { isFilter, setIsFilter } = useFilter();
    const { condition } = useUserCondition();

    useEffect(() => {
        setIsFilter(data[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={styles.mobileFilter}
            style={condition === "Болен" ? { borderColor: "#F7E6E8" } : {}}
        >
            {data.map((item) => (
                <div
                    key={item}
                    className={`${
                        condition === "Болен" && isFilter === item
                            ? `${styles.item} ${styles.active_red}`
                            : condition === "Здоров" && isFilter == item
                            ? `${styles.item} ${styles.active}`
                            : `${styles.item}`
                    }`}
                    onClick={() => setIsFilter(item)}
                >
                    <Text
                        type="p"
                        fz={
                            window.matchMedia(
                                "(min-width: 576px) and (max-width: 768px)"
                            ).matches
                                ? "16px"
                                : "14px"
                        }
                    >
                        {item}
                    </Text>
                </div>
            ))}
        </div>
    );
};
