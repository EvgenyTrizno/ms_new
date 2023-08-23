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
import {
    useExtraCall,
    useNotification,
    useUserData,
} from "@/shared/model/store";
import MobileAccountPage from "@/widgets/components/MobileAccount/MobileAccountPage";
import { PC, SMALL_LAPTOP, TABLET, MOBILE } from "@/shared/utils";

import extra from "/assets/extra-call.svg";
import cross from "/assets/cross.svg";
import styles from "./Layout.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    const { isOpen, setIsOpen } = useExtraCall();
    const { isNotification } = useNotification();
    const { group } = useUserData();

    return (
        <div className={styles.layout}>
            {(MOBILE || TABLET) && (
                <>
                    {children}
                    <MobileMenu />
                    <ExtraCallMobile />
                    <MobileAccountPage />
                </>
            )}
            {(PC || SMALL_LAPTOP) && (
                <>
                    <Header />
                    <div className={styles.container}>
                        <Menu />
                        <div className={styles.main}>{children}</div>
                        <ExtraCallModal />
                        {location.pathname !== "/messages" &&
                            group !== "Врачи" && (
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
