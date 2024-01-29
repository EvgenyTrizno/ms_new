import { FC, MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import { Colors, Sizes, StyleType } from "./types";
import cn from "clsx";

type Props = {
  type?: "button" | "submit";
  title?: string;
  icon?: JSX.Element;
  styleType?: StyleType;
  size?: Sizes;
  color?: Colors;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<PropsWithClassName<Props>> = ({
  className,
  type = "button",
  title,
  icon,
  styleType = "fill",
  size = "normal",
  color = "primary",
  onClick,
}) => {
  return (
    <button
      className={cn(className, styles.btn, {
        [styles[styleType]]: styleType,
        [styles[size]]: size,
        [styles[color]]: color,
      })}
      type={type}
      onClick={onClick}
    >
      {icon} <span>{title}</span>
    </button>
  );
};
