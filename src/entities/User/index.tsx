import { Row } from "@/shared/ui/Row";
import styles from "./styles.module.scss";
import { Rows } from "@/shared/ui/Rows";
import { MenuIcon } from "@/icons";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  withEdit?: boolean;
  count?: number;
};

const User: FC<PropsWithClassName<Props>> = ({
  className,
  withEdit = true,
  count,
}) => {
  return (
    <Row className={cn(styles.wrapper, className)} gap={12}>
      <Row gap={12}>
        {count && <div className={styles.count}>1</div>}
        <img className={styles.avatar} src="/assets/avatar.png" alt="avatar" />
        <Rows className={styles.content} gap={4} rows={["auto"]}>
          <h5>Alena Passaquindici Arcand</h5>
          <span>Хирург</span>
        </Rows>
      </Row>

      {withEdit && (
        <div className={styles.menuBtn}>
          <MenuIcon />
        </div>
      )}
    </Row>
  );
};

export default User;
