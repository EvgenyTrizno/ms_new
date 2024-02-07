import { CardLayout } from "@/entities/Card";
import styles from "./styles.module.scss";
import { SkeletonWrapper } from "@/widgets";

export const Skeleton = () => {
  return (
    <SkeletonWrapper>
      <CardLayout
        userAvatar={<div className={styles.avatar}></div>}
        userRank={<div className={styles.text}></div>}
      />
    </SkeletonWrapper>
  );
};
