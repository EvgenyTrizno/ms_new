import styles from "./styles.module.scss";

const NewsItem = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src="/assets/news-item.jpg" alt="news-item" />

      <div className={styles.content}>
        <h6>Semet consectetur. Rutrum ridiculus...</h6>

        <span>04.01.24</span>
      </div>
    </div>
  );
};

export default NewsItem;
