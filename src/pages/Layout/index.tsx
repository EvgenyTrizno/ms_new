import { FC, useState } from "react";
import { TProps } from "./types";

// import {
//     // MobileMenu,
//     ExtraCallMobile,
// } from "@/widgets";
import { Header } from "@/widgets/components/Header/ui";
import { Menu } from "@/widgets/components/Menu/ui";
import { MobileAccountMenu } from "@/widgets/components/MobileAccount/MobileAccountMenu";
import { ExtraCallBtn } from "./ui";
import { PC, SMALL_LAPTOP, TABLET, MOBILE, LAPTOP } from "@/shared/utils";

import styles from "./styles.module.scss";
import { ExtraCallModal } from "@/widgets/components/ExtraCallModal/ui/ExtraCallModal";

export const Layout: FC<TProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.layout}>
            {MOBILE && <MobileAccountMenu />}
            {!MOBILE && !TABLET && <Header />}
            <div className={styles.container}>
                {(PC || SMALL_LAPTOP || LAPTOP) && <Menu />}
                <div className={styles.main}>{children}</div>
                <ExtraCallBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {isOpen && <ExtraCallModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
};
