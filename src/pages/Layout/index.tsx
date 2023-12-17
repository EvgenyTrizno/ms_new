import { FC, useState } from "react";
import { TProps } from "./types";
import { Header } from "@/widgets/components/Header/ui";
import { Menu } from "@/widgets/components/Menu/ui/Menu";
import { MobileAccountMenu } from "@/widgets/components/MobileAccount/MobileAccountMenu";
import { PC, SMALL_LAPTOP, TABLET, MOBILE, LAPTOP } from "@/shared/utils";
import { ExtraCallBtn } from "@/widgets/components/ExtraCallBtn";
import { ExtraCallModal } from "@/widgets/components/ExtraCallModal/ui/ExtraCallModal";
import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const Layout: FC<TProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user } = useAuth();

    return (
        <div>
            {MOBILE && <MobileAccountMenu />}
            {!MOBILE && !TABLET && <Header />}
            <div>
                {(PC || SMALL_LAPTOP || LAPTOP) && <Menu />}
                <div className={styles.main}>{children}</div>
                {user && user.group.name === "Пользователи" && (
                    <ExtraCallBtn isOpen={isOpen} setIsOpen={setIsOpen} />
                )}
            </div>
            {isOpen && <ExtraCallModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
};
