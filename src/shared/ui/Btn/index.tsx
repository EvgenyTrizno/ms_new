import { FC } from "react";
import { IBtn } from "./types";

import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const Btn: FC<IBtn> = ({
  color,
  width = "100%",
  children,
  onClick = () => "",
  br,
  padding,
  disabled,
  border,
  textColor,
  height,
  type,
  fz,
  minW,
  className,
}) => {
  const { user } = useAuth();

  const sick = user && user.disease.length;

  return (
    <button
      className={`${className} ${styles.btn}`}
      type={type}
      style={{
        fontSize: fz,
        background: `${
          sick
            ? "#D64657"
            : sick && color === "transparent"
            ? "#transparent"
            : `${color}`
        }`,
        width,
        borderRadius: br,
        padding,
        border:
          sick && color === "transparent"
            ? "1px solid #D64657"
            : !sick && color === "transparent"
            ? border
            : !sick
            ? "none"
            : border,
        color: sick && color === "transparent" ? "#D64657" : `${textColor}`,
        height,
        minWidth: minW,
      }}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
