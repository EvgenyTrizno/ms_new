import { FC } from "react";
import { ISmallDropboxProps } from "./types";

import { Text } from "@/shared/ui/Text";

import selectImg from "/assets/tick-circle.svg";
import styles from "./SmallDropbox.module.scss";

export const SmallDropbox: FC<ISmallDropboxProps> = ({
    open,
    setOpen,
    data,
    select,
    setSelect,
}) => {
    const classes = open ? `${styles.content} ${styles.open}` : styles.content;

    return (
        <div className={styles.dropbox} onClick={() => setOpen(!open)}>
            <div className={styles.select}>
                <Text type="p" position="center" fz="18px" color="#262626">
                    {select}
                </Text>
            </div>
            <div className={styles.contentWrapper}>
                <div className={classes}>
                    <div style={{ minHeight: 0 }}>
                        {data &&
                            data.map((item, i) => (
                                <div
                                    className={styles.item}
                                    key={i}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelect(item);
                                    }}
                                >
                                    <Text type="p" color="#262626">
                                        {item}
                                    </Text>
                                    {select === item && (
                                        <img src={selectImg} alt="" />
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
