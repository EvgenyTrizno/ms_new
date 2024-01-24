import { FC } from "react";
import { TProps } from "./types";
import { Header } from "@/widgets/components/Header/ui";
import { Menu } from "@/widgets/components/Menu/ui/Menu";
// import { MobileAccountMenu } from "@/widgets/components/MobileAccount/MobileAccountMenu";
import { PC, SMALL_LAPTOP, TABLET, MOBILE, LAPTOP } from "@/shared/utils";
// import { ExtraCallBtn } from "@/widgets/components/ExtraCallBtn";
// import { ExtraCallModal } from "@/widgets/components/ExtraCallModal/ui/ExtraCallModal";
import { useAuth } from "@/shared/model/store/auth";
// import { useExtracall } from "@/shared/model/store/extracall";

import styles from "./styles.module.scss";
import { BurgerMenu } from "@/widgets/components/BurgerMenu";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";

export const Layout: FC<TProps> = ({ children }) => {
  // const { isOpen, setIsOpen } = useExtracall();
  const { isOpen, setIsOpen } = useBurgerMenu();
  const { user } = useAuth();

  return (
    <div>
      {/* {MOBILE && <MobileAccountMenu />} */}
      {!MOBILE && !TABLET && <Header />}

      {(PC || SMALL_LAPTOP || LAPTOP) && <Menu />}
      <div className={styles.main}>{children}</div>
      {/* {user && user.group.name === "Пользователи" && !MOBILE && (
                    <ExtraCallBtn isOpen={isOpen} />
                )} */}

      {/* {isOpen && <ExtraCallModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      {isOpen && <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
