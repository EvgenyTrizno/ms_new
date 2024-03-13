import { FC } from "react";
import { TProps } from "./types";
import { Header } from "@/widgets/components/Header/ui";
import cn from "clsx";

import styles from "./styles.module.scss";
import { BurgerMenu } from "@/widgets/components/BurgerMenu";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";
import { Call, Sidebar } from "@/widgets/components";
import { MobileMenu } from "@/widgets/components/MobileMenu";

export const Layout: FC<TProps> = ({ children, bgColor = "blue" }) => {
  const { isOpen } = useBurgerMenu();

  return (
    <div>
      {/* {MOBILE && <MobileAccountMenu />} */}
      {/* {!MOBILE && !TABLET && <Header />} */}

      {/* <Menu /> */}

      <Header />

      <Sidebar className={styles.sidebarWrapper} />

      <div
        className={cn(styles.main, {
          [styles[bgColor]]: bgColor,
        })}
      >
        {children}
      </div>
      {/* {user && user.group.name === "Пользователи" && !MOBILE && (
                    <ExtraCallBtn isOpen={isOpen} />
                )} */}

      {/* {isOpen && <ExtraCallModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      {isOpen && <BurgerMenu />}

      <Call />
      <MobileMenu />
    </div>
  );
};
