import { FC } from "react";
import { TProps } from "./types";

import {
    MobileMenu,
    ExtraCallModal,
    Header,
    Menu,
    ExtraCallMobile,
} from "@/widgets";
import { MOBILE_SCREEN } from "@/shared/utils";
import { useExtraCall } from "@/shared/model/store";

import extra from "/assets/extra-call.svg";
import styles from "./Layout.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    const { isOpen, setIsOpen } = useExtraCall();

    return (
        <div className={styles.layout}>
            {MOBILE_SCREEN ? (
                <div className={styles.mobileContainer}>
                    {children}
                    <MobileMenu />
                    {isOpen && <ExtraCallMobile />}
                </div>
            ) : (
                <>
                    <Header />
                    <div className={styles.container}>
                        <Menu />
                        <div className={styles.main}>{children}</div>
                        {isOpen ? (
                            <ExtraCallModal />
                        ) : (
                            <div
                                className={styles.extra}
                                onClick={() => setIsOpen(true)}
                            >
                                <img src={extra} alt="" />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
