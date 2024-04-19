import { useMainStore } from "@/shared/model/store/main";
import { Loader } from "../Loader";
import styles from "./styles.module.scss";
import cn from "clsx";

export const PageLoader = () => {
  const { isOpenSidebar } = useMainStore();

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.isOpenSidebar]: isOpenSidebar,
        [styles.notOpenSidebar]: !isOpenSidebar,
      })}
    >
      <Loader />
    </div>
  );
};
