import { FC, useRef, useState } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";
import { PropsWithClassName } from "@/shared/types";
import { MenuIcon } from "@/icons";
import { useOutside } from "@/shared/lib/hooks";

type Item = {
  title: string;
  onClick: () => void;
};

type Props = {
  list: Item[];
};

export const AdditionalMenuBtn: FC<PropsWithClassName<Props>> = ({
  className,
  list,
}) => {
  const [isOpen, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useOutside(listRef, () => setOpen(false), btnRef);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={styles.menuBtn}
        ref={btnRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        <MenuIcon />
      </div>

      {isOpen && (
        <div className={styles.list} ref={listRef}>
          {list.map((el, idx) => {
            return (
              <div
                key={idx}
                className={styles.item}
                onClick={() => {
                  setOpen(false);

                  el.onClick();
                }}
              >
                {el.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
