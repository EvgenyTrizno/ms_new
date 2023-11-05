import { FC } from "react";
import { TProps } from "./types";

import {
    // MobileMenu,
    ExtraCallModal,
    ExtraCallMobile,
} from "@/widgets";
import { Header } from "@/widgets/components/Header/ui";
import { Menu } from "@/widgets/components/Menu/ui";
import { NotificationModal } from "@/widgets/components/NotificationModal";
import { MobileAccountMenu } from "@/widgets/components/MobileAccount/MobileAccountMenu";
import { PC, SMALL_LAPTOP, TABLET, MOBILE, LAPTOP } from "@/shared/utils";

// import extra from "/assets/extra-call.svg";
// import cross from "/assets/cross.svg";
import styles from "./Layout.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    const group = "Врачи";

    return (
        <div className={styles.layout}>
            {MOBILE && <MobileAccountMenu />}
            {!MOBILE && !TABLET && <Header />}
            <div className={styles.container}>
                {(PC || SMALL_LAPTOP || LAPTOP) && <Menu />}
                <div className={styles.main}>{children}</div>
                {MOBILE || TABLET ? <ExtraCallMobile /> : <ExtraCallModal />}
                {location.pathname !== "/messages" &&
                    group !== "Врачи" &&
                    !MOBILE &&
                    !TABLET && (
                        <div
                            className={styles.extra}
                            // onClick={() => setIsOpen(true)}
                        >
                            {/* <img src={!isOpen ? extra : cross} alt="" /> */}
                        </div>
                    )}
                {<NotificationModal />}
            </div>
        </div>
    );
};
