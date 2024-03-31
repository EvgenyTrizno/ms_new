import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";

type Props = {
  type: "no-messages";
};

export const ChatHelpMessage: FC<PropsWithClassName<Props>> = ({
  className,
  type,
}) => {
  if (type === "no-messages") {
    return (
      <div className={cn(styles.wrapper, className)}>
        <svg
          width="121"
          height="120"
          viewBox="0 0 121 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.5 75C49.7519 78.1516 54.9228 80 60.5 80C66.0772 80 71.2481 78.1516 75.5 75"
            stroke="#7D7F82"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <ellipse cx="75.5" cy="47.5" rx="5" ry="7.5" fill="#7D7F82" />
          <ellipse cx="45.5" cy="47.5" rx="5" ry="7.5" fill="#7D7F82" />
          <path
            d="M110.5 98.615V61.5029C110.5 33.0587 88.1142 10 60.5 10C32.8858 10 10.5 33.0587 10.5 61.5029V98.615C10.5 105.227 17.2549 109.527 22.996 106.57C27.6363 104.18 33.164 104.535 37.4807 107.499C42.3368 110.834 48.6632 110.834 53.5193 107.499L55.2826 106.288C58.442 104.119 62.558 104.119 65.7174 106.288L67.4807 107.499C72.3368 110.834 78.6632 110.834 83.5193 107.499C87.836 104.535 93.3637 104.18 98.004 106.57C103.745 109.527 110.5 105.227 110.5 98.615Z"
            stroke="#7D7F82"
            strokeWidth="5"
          />
        </svg>

        <h4>Сообщений пока нет</h4>

        <p>Отправьте сообщения что бы начать диалог</p>
      </div>
    );
  }

  return null;
};
