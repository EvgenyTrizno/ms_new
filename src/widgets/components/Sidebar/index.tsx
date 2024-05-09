import styles from "./styles.module.scss";
import { Logo } from "@/widgets/components";
import cn from "clsx";
import { useMainStore } from "@/shared/model/store/main";
import { FC, useEffect } from "react";
import { PropsWithClassName } from "@/shared/types";
import { useLocation } from "react-router";
import { useAuth } from "@/shared/model/store/auth";
import { PersonalMenu } from "./ui/PersonalMenu";
import { UserMenu } from "./ui/UserMenu";

export const Sidebar: FC<PropsWithClassName> = ({ className }) => {
  const { isOpenSidebar, setOpenSidebar } = useMainStore();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const resizeWindow = () => {
      if (
        window.innerWidth >= 1024 &&
        window.innerWidth < 1280 &&
        isOpenSidebar
      ) {
        setOpenSidebar(false);
      }

      if (window.innerWidth >= 1280) {
        setOpenSidebar(true);
      }
    };

    resizeWindow();

    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.notOpenSidebar]: !isOpenSidebar,
      })}
      onMouseEnter={() => {
        if (window.innerWidth >= 1280) return;

        setOpenSidebar(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1280) return;

        setOpenSidebar(false);
      }}
    >
      <div className={styles.header}>
        <Logo />
      </div>

      <div className={styles.list}>
        {!user?.is_staff ? <UserMenu /> : <PersonalMenu />}
      </div>
    </div>
  );
};
