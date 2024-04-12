import { useEffect } from "react";
import { useAuthMutation } from "@/shared/lib/hooks/useAuthMutation";
import { useCookie } from "@/shared/lib/hooks/useCookie";

import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import { NotificationsLink } from "@/widgets/components";
import cn from "clsx";
import { useMainStore } from "@/shared/model/store/main";
import { pagesTitles } from "@/shared/utils/PATHS";

export const Header = () => {
  const { getCookie } = useCookie();
  const { mutate: auth } = useAuthMutation(
    getCookie("refresh_token") as string
  );
  // const { user } = useAuth();
  const { isOpenSidebar } = useMainStore();
  const { pathname } = useLocation();

  useEffect(() => {
    auth();
  }, [auth]);

  return (
    <header
      className={cn(styles.header, {
        [styles.isOpenSidebar]: isOpenSidebar,
        [styles.notOpenSidebar]: !isOpenSidebar,
      })}
    >
      <Link className={styles.headerMainLink} to="/">
        {pagesTitles[pathname]}
      </Link>

      <div className={styles.right}>
        <NotificationsLink />

        <Link className={styles.profile} to="/account">
          <img src="/assets/avatar.png" alt="avatar" />
        </Link>
      </div>
    </header>
  );
};
