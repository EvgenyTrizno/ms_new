import { FC, ChangeEvent } from "react";
import { IUserProps } from "./types";

import { Text } from "@/shared/ui/Text";

import noimage from "/assets/noimage.svg";
import styles from "./User.module.scss";

export const User: FC<IUserProps> = ({ img, first_name, last_name, role }) => {
    const name = first_name.slice(0, 1).toUpperCase();
    // const surname = last_name.split("");

    return (
        <div className={styles.user}>
            <div className={styles.image}>
                <img src={img === "" ? noimage : img} alt="" />
                <input
                    accept=".jpg, .png, jpeg"
                    type="file"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const file = e.target.files;

                        if (file) {
                            console.log(file[0]);
                        }
                    }}
                />
            </div>
            <div className={styles.data}>
                <Text type="h2" color="#262626" fz="20px">
                    {`${last_name} ${name}. A.`}
                </Text>
                <Text type="p" color="#B1B2B4" fz="14px">
                    {role}
                </Text>
            </div>
        </div>
    );
};
