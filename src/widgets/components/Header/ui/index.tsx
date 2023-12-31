import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IHeaderProps } from "../model/types";

import { Text } from "@/shared/ui/Text";
import { useMenu } from "@/shared/model/store";
// import { Balance } from "../../Balance/Balance";
import { useAuthMutation } from "@/shared/lib/hooks/useAuthMutation";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useAuth } from "@/shared/model/store/auth";
import { UserData } from "./UserData";
import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";

export const Header: FC<IHeaderProps> = ({ width }) => {
    const { isSelect } = useMenu();
    const { getCookie } = useCookie();
    const { mutate: auth } = useAuthMutation(
        getCookie("refresh_token") as string
    );
    const { isAuth, user } = useAuth();

    const sick = user && user.disease.length;

    useEffect(() => {
        auth();
    }, [auth]);

    return (
        <header
            className={styles.header}
            style={{ width, borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
        >
            <div className={styles.nav}>
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <Text
                            fz="14px"
                            color={`${sick ? "#D64657" : "#0064FA"}`}
                            type="p"
                        >
                            {isSelect}
                        </Text>
                    </div>
                </div>
                {isAuth && user && user.group.name !== "Администраторы" ? (
                    <UserData />
                ) : (
                    <Row gap={10}>
                        <NavLink to="/login">
                            <Text type="h2" fz="14px" color="#0064FA">
                                Войти
                            </Text>
                        </NavLink>
                        <Text type="p" color="#0064FA">
                            /
                        </Text>
                        <NavLink to="/registration">
                            <Text type="h2" fz="14px" color="#0064FA">
                                Регистрация
                            </Text>
                        </NavLink>
                    </Row>
                )}
            </div>
        </header>
    );
};
