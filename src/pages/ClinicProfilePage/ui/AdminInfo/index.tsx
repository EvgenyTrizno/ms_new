import { WidgetWrapper } from "@/widgets/components";
import styles from "./styles.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";

export const AdminInfo: FC<PropsWithClassName> = ({ className }) => {
  return (
    <WidgetWrapper className={className} title="Администратор">
      <div className={styles.inner}>
        <img className={styles.avatar} src="/assets/avatar.png" alt="avatar" />

        <div className={styles.content}>
          <h5 className={styles.name}>Алексеев Эрнест Владимирович</h5>

          <div className={styles.phoneWrapper}>
            <h6 className={styles.phoneTitle}>Номер телефона</h6>
            <a className={styles.phone} href="#">
              +7(923)-123-45-67
            </a>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
