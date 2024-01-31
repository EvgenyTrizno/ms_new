import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { MenuIcon } from "@/icons";

const Hardware: FC<PropsWithClassName> = ({ className }) => {
  return (
    <Row gap={12} className={cn(styles.wrapper, className)}>
      <Row gap={12}>
        <div className={styles.count}>1</div>
        <img className={styles.img} src="/assets/hardware.png" alt="hardware" />

        <Rows className={styles.content} gap={4} rows={["auto"]}>
          <h5>Raio X</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo id lacinia pulvinar ali.
          </p>
        </Rows>
      </Row>

      <div className={styles.menuBtn}>
        <MenuIcon />
      </div>
    </Row>
  );
};

export default Hardware;
