import { FC, useState, useId } from "react";
import { IDrop } from "./types";

import styles from "./Drop.module.scss";
import { Text } from "../Text";

export const Drop: FC<IDrop> = ({ data }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSelect, setIsSelect] = useState<string>(data[0]);

    const id = useId();

    return (
        <div className={styles.drop}>
            <div
                className={styles.block}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Text type="p" fz="12px">
                    {isSelect}
                </Text>
            </div>
            {isOpen && (
                <div
                    className={styles.items}
                    onClick={(e) => e.stopPropagation()}
                >
                    {data.map((item) => (
                        <div
                            key={id}
                            className={styles.dropItem}
                            onClick={() => setIsSelect(item)}
                        >
                            <Text type="p" fz="14px">
                                {isSelect}
                            </Text>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
