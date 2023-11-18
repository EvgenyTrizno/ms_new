import { FC, ChangeEvent } from "react";

import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";

import noimage from "/assets/noimage.svg";
import styles from "./styles.module.scss";

export const User: FC = () => {
    const { user } = useAuth();

    return (
        <div className={styles.user}>
            <div className={styles.image}>
                <img
                    src={
                        !user || (user && !user.image)
                            ? noimage
                            : user && user.image
                    }
                    alt=""
                />
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
                    {getFullUsernameWithInitials(
                        (user && user.last_name) ?? "",
                        (user && user.first_name) ?? "",
                        ""
                    )}
                </Text>
                <Text type="p" color="#B1B2B4" fz="14px">
                    {user && user.group.name}
                </Text>
            </div>
        </div>
    );
};
