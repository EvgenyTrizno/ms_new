import { FC } from "react";
import { TProps } from "./types";

import {
    // MobileMenu,
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
// import MobileAccountPage from "@/widgets/components/MobileAccount/MobileAccountPage";
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
            {!MOBILE && !TABLET && <Header />}
            <div className={styles.container}>
                {(PC || SMALL_LAPTOP) && <Menu />}
                <div className={styles.main}>{children}</div>
                {MOBILE || TABLET ? <ExtraCallMobile /> : <ExtraCallModal />}
                {location.pathname !== "/messages" &&
                    group !== "Врачи" &&
                    !MOBILE &&
                    !TABLET && (
                        <div
                            className={styles.extra}
                            onClick={() => setIsOpen(true)}
                        >
                            <img src={!isOpen ? extra : cross} alt="" />
                        </div>
                    )}
                {isNotification && <NotificationModal />}
            </div>
        </div>
    );
};
