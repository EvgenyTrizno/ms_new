import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { Text } from "@/shared/ui/Text";
import { HealthyStatus } from "@/widgets/components/HealthyStatus";
import { LAPTOP, PC, SMALL_LAPTOP } from "@/shared/utils";
import { Search } from "@/features/Search/ui";
import { ItemsList } from "./ItemsList";
import { useAuth } from "@/shared/model/store/auth";
import { Rows } from "@/shared/ui/Rows";

import logo from "/assets/logo.svg";
import bigLogo from "/assets/logo-with-text.svg";
import bigLogoRed from "/assets/logo-with-text-red.svg";
import styles from "./styles.module.scss";

export const Menu: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // style={{ borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
            className={
                PC || LAPTOP
                    ? `${styles.menu} ${styles.open}`
                    : isHovered
                    ? `${styles.menu} ${styles.open}`
                    : styles.menu
            }
        >
            <div
                className={styles.logo}
                // style={{
                //     borderColor: sick ? "#F7E6E8" : "#EBF3FF",
                // }}
            >
                {!isHovered && SMALL_LAPTOP && <img alt="" src={logo} />}
                {(isHovered || PC || LAPTOP) &&
                    (!user || (user && user.group.name === "Пользователи")) && (
                        <img
                            src={
                                user && user.disease.length
                                    ? bigLogoRed
                                    : bigLogo
                            }
                            alt=""
                            onClick={() => navigate("/")}
                        />
                    )}
                {user && user.group.name === "Администраторы" && (
                    <Search placeholder="Поиск" />
                )}
            </div>
            <div className={styles.container}>
                <Rows gap={10} rows={["auto"]}>
                    {(PC ||
                        !user ||
                        (SMALL_LAPTOP && isHovered) ||
                        (user && user.group.name === "Пользователи")) && (
                        <Text color="#B1B2B4" type="p" fz="14px">
                            Состояние:
                        </Text>
                    )}
                    <HealthyStatus isHovered={isHovered} />
                </Rows>
                <ItemsList />
            </div>
        </div>
    );
};
