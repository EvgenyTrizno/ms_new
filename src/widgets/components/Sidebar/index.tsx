import styles from "./styles.module.scss";
import { Logo } from "@/widgets/components";
import cn from "clsx";
import { useMainStore } from "@/shared/model/store/main";
import { FC, useEffect } from "react";
import { PropsWithClassName } from "@/shared/types";
import { useLocation } from "react-router";
import { useAuth } from "@/shared/model/store/auth";
import { PersonalMenu } from "./ui/PersonalMenu";
import { UserMenu } from "./ui/UserMenu";
import { LastVisitClinic } from "@/features/LastVisitClinic/ui";
import lastVisitIcon from "/assets/users-gray.svg"
import { LAPTOP, PC } from "@/shared/utils";
import { MenuItem } from "./ui/MenuItem";

export const Sidebar: FC<PropsWithClassName> = ({ className }) => {
    const { isOpenSidebar, setOpenSidebar } = useMainStore();
    const location = useLocation();
    const { user } = useAuth();

    useEffect(() => {
        const resizeWindow = () => {
            if (
                window.innerWidth >= 1024 &&
                window.innerWidth < 1280 &&
                isOpenSidebar
            ) {
                setOpenSidebar(false);
            }

            if (window.innerWidth >= 1280) {
                setOpenSidebar(true);
            }
        };

        resizeWindow();

        window.addEventListener("resize", resizeWindow);

        return () => window.removeEventListener("resize", resizeWindow);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div
            className={cn(styles.wrapper, className, {
                [styles.notOpenSidebar]: !isOpenSidebar,
            })}
            // onMouseEnter={() => {
            //     if (window.innerWidth >= 1280) return;
            //
            //     setOpenSidebar(true);
            // }}
            // onMouseLeave={() => {
            //     if (window.innerWidth >= 1280) return;
            //
            //     setOpenSidebar(false);
            // }}
        >
            <div className={styles.header}>
                <Logo />
            </div>

            <div className={styles.list}>
                <UserMenu />
            </div>
            <div className={styles.line}></div>
            <div className={styles.last__visit}>
                {/* <img src={lastVisitIcon} alt="" width={20} height={20} /> */}

                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.last__visit__icon}>
                    <g id="icon">
                        <g id="Users">
                            <path id="Vector" d="M17.5 15.8359C17.5 14.3845 16.1087 13.1498 14.1667 12.6922M12.5 15.8359C12.5 13.995 10.2614 12.5026 7.5 12.5026C4.73858 12.5026 2.5 13.995 2.5 15.8359M12.5 10.0026C14.3409 10.0026 15.8333 8.51022 15.8333 6.66927C15.8333 4.82832 14.3409 3.33594 12.5 3.33594M7.5 10.0026C5.65905 10.0026 4.16667 8.51022 4.16667 6.66927C4.16667 4.82832 5.65905 3.33594 7.5 3.33594C9.34095 3.33594 10.8333 4.82832 10.8333 6.66927C10.8333 8.51022 9.34095 10.0026 7.5 10.0026Z" stroke="#7D7F82" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                                stroke="#B1B2B4"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round" />
                        </g>
                    </g>
                </svg>
                <div className={styles.last__visit__title}>
                    Последние посещения
                </div>
                <LastVisitClinic />
                <LastVisitClinic />
                <LastVisitClinic />
                <LastVisitClinic />
            </div>
        </div>
    );
};
