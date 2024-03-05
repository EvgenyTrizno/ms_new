import { FC } from "react";
import { TProps } from "./types";
import { Header } from "@/widgets/components/Header/ui";
import { Menu } from "@/widgets/components/Menu/ui/Menu";
// import { MobileAccountMenu } from "@/widgets/components/MobileAccount/MobileAccountMenu";
import { PC, SMALL_LAPTOP, TABLET, MOBILE, LAPTOP } from "@/shared/utils";
// import { ExtraCallBtn } from "@/widgets/components/ExtraCallBtn";
// import { ExtraCallModal } from "@/widgets/components/ExtraCallModal/ui/ExtraCallModal";
// import { useExtracall } from "@/shared/model/store/extracall";

import styles from "./styles.module.scss";
import { BurgerMenu } from "@/widgets/components/BurgerMenu";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";
import { Sidebar } from "@/widgets/components";

export const Layout: FC<TProps> = ({ children }) => {
  const { isOpen } = useBurgerMenu();

  return (
    <div>
      {/* {MOBILE && <MobileAccountMenu />} */}
      {!MOBILE && !TABLET && <Header />}

      {/* <Menu /> */}

      <Sidebar />

      <div className={styles.main}>{children}</div>
      {/* {user && user.group.name === "Пользователи" && !MOBILE && (
                    <ExtraCallBtn isOpen={isOpen} />
                )} */}

      {/* {isOpen && <ExtraCallModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      {isOpen && <BurgerMenu />}
    </div>
  );
};
