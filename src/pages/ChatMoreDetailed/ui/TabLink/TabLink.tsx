import { Link } from "react-router-dom";
import styles from "./TabLink.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";

type Props = {
  src: string;
  title: string;
  href: string;
};

export const TabLink: FC<PropsWithClassName<Props>> = ({
  className = "",
  src,
  title,
  href = "/",
}) => {
  return (
    <Link className={`${styles.link} ${className}`} to={href}>
      <img src={src} alt={title} />
      <span>{title}</span>
    </Link>
  );
};
