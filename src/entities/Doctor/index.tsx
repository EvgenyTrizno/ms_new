import { Row } from "@/shared/ui/Row";
import styles from "./styles.module.scss";
import { Rows } from "@/shared/ui/Rows";
import { MenuIcon } from "@/icons";
import { FC } from "react";
import { Doctor as DoctorTypes, PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  withEdit?: boolean;
  count?: number;
  data: DoctorTypes;
};

export const Doctor: FC<PropsWithClassName<Props>> = ({
  className,
  withEdit = true,
  count,
  data,
}) => {
  return (
    <Row className={cn(styles.wrapper, className)} gap={12}>
      <Row gap={12}>
        {count && <div className={styles.count}>1</div>}
        <img className={styles.avatar} src={data.image} alt="avatar" />
        <Rows className={styles.content} gap={4} rows={["auto"]}>
          <h5>{`${data.surname || data.middle_name} ${data.first_name} ${
            data.last_name
          }`}</h5>
          <span>{data.specialization}</span>
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
