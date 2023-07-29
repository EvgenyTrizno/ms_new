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
import { MOBILE_SCREEN } from "@/shared/utils";
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
            {MOBILE_SCREEN ? (
                <div className={styles.mobileContainer}>
                    {children}
                    <MobileMenu />
                    <ExtraCallMobile />
                    {/* <MobileAccountPage /> */}
                </div>
            ) : (
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
