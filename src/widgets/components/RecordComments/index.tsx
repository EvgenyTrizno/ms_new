import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Comment } from "./ui/Comment";

export const RecordComments = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Среднее проведенное время: 5 часов</p>

        <p>
          Изучение записи для: <Link to="#">записи No 4</Link>
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <p>Комментарии</p>
        </div>

        <div className={styles.messages}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};
