import { FC } from "react";
import { useNavigate } from "react-router";

import { ROUTES } from "@/shared/utils/PATHS";

import notifi from "./assets/notification.svg";
import bureger from "./assets/BurgerMenu.svg";
import buregerClose from "./assets/Close.svg";
import styles from "./styles.module.scss";

type TProps = {
  isOpen: boolean;
  setIsOpen: (bol: boolean) => void;
};

export const MobileHeader: FC<TProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  // console.log(ROUTES.notifications.path);
  return (
    <div className={styles.mobileHeader}>
      {/* <Avatar
                img={man}
                size={52}
                type="custom"
                onClick={() => navigate(ROUTES.profile.path)}
            /> */}
      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? buregerClose : bureger} alt="burger" />
      </div>
      {/* <HealthyStatus isHovered={false} /> */}
      {/* <HealthyIndicator height="34px" status={70} p={4} fs={12} /> */}
      <div className={styles.notification}>
        <img
          src={notifi}
          alt="notifications"
          onClick={() => navigate(ROUTES.notifications.path)}
        />
      </div>
    </div>
  );
};
