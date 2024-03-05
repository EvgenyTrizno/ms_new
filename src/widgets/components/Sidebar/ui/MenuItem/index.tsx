import { FC, MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "clsx";
import { useMainStore } from "@/shared/model/store/main";

type Props = {
  href: string;
  icon: JSX.Element;
  title: string;
  onClick?: MouseEventHandler;
};

export const MenuItem: FC<Props> = ({ href, icon, title, onClick }) => {
  const location = useLocation();
  const { isOpenSidebar } = useMainStore();

  return (
    <Link
      className={cn(styles.wrapper, {
        [styles.active]: location.pathname === href,
        [styles.notOpenSidebar]: !isOpenSidebar,
      })}
      to={href}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};
