import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { Rows } from "@/shared/ui/Rows";

export const Folder: FC = () => {
    return (
        <div className={styles.folder}>
            <Cols type="custom" gap={8} cols={["149px", "149px"]}>
                <div
                    style={{
                        backgroundColor: "red",
                        width: "149px",
                        height: 149,
                        borderRadius: 8,
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: "red",
                        width: "149px",
                        height: 149,
                        borderRadius: 8,
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: "red",
                        width: "149px",
                        height: 149,
                        borderRadius: 8,
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: "red",
                        width: "149px",
                        height: 149,
                        borderRadius: 8,
                    }}
                ></div>
            </Cols>
            <Rows gap={8} rows={["auto"]}>
                <Text type="h4" fz="16px">
                    Публикация
                </Text>
                <Text type="p" fz="14px" fw={400}>
                    Описание
                </Text>
            </Rows>
        </div>
    );
};
