import cn from "clsx";
import styles from "./styles.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";

export const Call: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div>
      <div className={cn(styles.btn)}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M18.75 31H13.25C12.6977 31 12.25 30.5523 12.25 30V20.75C12.25 20.1977 11.8023 19.75 11.25 19.75H2C1.44772 19.75 1 19.3023 1 18.75V13.25C1 12.6977 1.44772 12.25 2 12.25H11.25C11.8023 12.25 12.25 11.8023 12.25 11.25V2C12.25 1.44772 12.6977 1 13.25 1H18.75C19.3023 1 19.75 1.44772 19.75 2V11.25C19.75 11.8023 20.1977 12.25 20.75 12.25H30C30.5523 12.25 31 12.6977 31 13.25V18.75C31 19.3023 30.5523 19.75 30 19.75H20.75C20.1977 19.75 19.75 20.1977 19.75 20.75V30C19.75 30.5523 19.3023 31 18.75 31Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
