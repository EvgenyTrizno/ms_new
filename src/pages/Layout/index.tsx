import { FC } from "react";
import { TProps } from "./types";
import { Header } from "@/widgets/components/Header/ui";
import cn from "clsx";

import styles from "./styles.module.scss";
import { BurgerMenu } from "@/widgets/components/BurgerMenu";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";
import { Call, Sidebar } from "@/widgets/components";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { useLocation } from "react-router";
import { PropsWithClassName } from "@/shared/types";

export const Layout: FC<PropsWithClassName<TProps>> = ({
    className,
    children,
    bgColor = "blue",
}) => {
    const { isOpen } = useBurgerMenu();
    const location = useLocation();

    return (
        <div>
            {/* {MOBILE && <MobileAccountMenu />} */}
            {/* {!MOBILE && !TABLET && <Header />} */}

            {/* <Menu /> */}

            <Header />

            <Sidebar className={styles.sidebarWrapper} />

            <div
                className={cn(styles.main, className, {
                    [styles[bgColor]]: bgColor,
                })}
            >
                {children}
            </div>
            {/* {user && user.group.name === "Пользователи" && !MOBILE && (
                    <ExtraCallBtn isOpen={isOpen} />
                )} */}

            {/* {isOpen && <ExtraCallModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
            {isOpen && <BurgerMenu />}

            {/* {location.pathname !== "/messages" && <Call />} */}
            {location.pathname !== "/messages" && <MobileMenu />}
        </div>
    );
};
