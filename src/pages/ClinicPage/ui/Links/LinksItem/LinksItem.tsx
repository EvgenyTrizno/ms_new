import { Link } from "react-router-dom";
import styles from "./LinkItem.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { LinkArrIcon } from "@/icons";

type Props = {
  href: string;
  title: string;
  count: number;
  icon: JSX.Element;
};

export const LinksItem: FC<PropsWithClassName<Props>> = ({
  className,
  href = "/",
  title,
  count = 0,
  icon,
}) => {
  return (
    <Link className={cn(className, styles.link)} to={href}>
      <div className={styles.header}>
        <p>{title}</p>
        <LinkArrIcon />
      </div>
      <div className={styles.footer}>
        <p>{count}</p>
        {icon}
      </div>
    </Link>
  );
};
