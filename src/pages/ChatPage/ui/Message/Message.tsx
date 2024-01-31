import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import styles from "./Message.module.scss";
import cn from "clsx";
import { Row } from "@/shared/ui/Row";

type Props = {
  type: "my" | "friend";
  text: string;
  time: Date;
};

export const Message: FC<PropsWithClassName<Props>> = ({
  className,
  type,
  text,
  time,
}) => {
  return (
    <div
      className={cn(styles.message, className, {
        [styles[type]]: type,
      })}
    >
      <p className={styles.messageText}>{text}</p>

      <Row className={styles.additionalInfo} gap={6}>
        <span>8:00 PM</span>
        <img src="/assets/icons/checked.svg" alt="checked" />
      </Row>
    </div>
  );
};
