import { FC } from "react";
import { TProps } from "./types";

import {
    MobileMenu,
    ExtraCallModal,
    Header,
    Menu,
    ExtraCallMobile,
    NotificationModal,
} from "@/widgets";
import { useExtraCall, useNotification } from "@/shared/model/store";
// import MobileAccountPage from "@/widgets/components/MobileAccount/MobileAccountPage";

import extra from "/assets/extra-call.svg";
import cross from "/assets/cross.svg";
import styles from "./Layout.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    const { isOpen, setIsOpen } = useExtraCall();
    const { isNotification } = useNotification();

    return (
        <div className={styles.layout}>
            {window.matchMedia("(max-width: 768px)").matches && (
                <div className={styles.mobileContainer}>
                    {children}
                    <MobileMenu />
                    <ExtraCallMobile />
                    {/* <MobileAccountPage /> */}
                </div>
            )}
            {/* {window.matchMedia("(max-width: 992px)").matches && (
                <div>dssdsdds</div>
            )} */}
            {window.matchMedia("(min-width: 1200px)").matches && (
                <>
                    <Header />
                    <div className={styles.container}>
                        <Menu />
                        <div className={styles.main}>{children}</div>
                        <ExtraCallModal />
                        {location.pathname !== "/messages" && (
                            <div
                                className={styles.extra}
                                onClick={() => setIsOpen(true)}
                            >
                                <img src={!isOpen ? extra : cross} alt="" />
                            </div>
                        )}
                        {isNotification && <NotificationModal />}
                    </div>
                </>
            )}
        </div>
    );
};
