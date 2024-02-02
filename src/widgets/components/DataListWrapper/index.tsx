import { FC } from "react";
import styles from "./styles.module.scss";
import { Loader } from "../Loader";

type Props = {
  children: JSX.Element;
  isLoading?: boolean;
  emptyText?: string;
  listIsUndefined: boolean;
  listLength: number;
};

export const DataListWrapper: FC<Props> = ({
  children,
  isLoading,
  emptyText = "Список пуст",
  listIsUndefined,
  listLength,
}) => {
  return (
    <div className={styles.wrapper}>
      {!isLoading ? (
        !listIsUndefined && listLength > 0 ? (
          children
        ) : (
          <p className={styles.emptyText}>{emptyText}</p>
        )
      ) : (
        <div className={styles.loaderBlock}>
          <Loader />
        </div>
      )}
    </div>
  );
};
