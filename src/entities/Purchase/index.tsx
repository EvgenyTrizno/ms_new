import styles from "./styles.module.scss";

const Purchase = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src="/assets/purhase.jpg" alt="purchace" />

      <div className={styles.content}>
        <h6 className={styles.title}>Пульт управления членом</h6>
        <p className={styles.price}>$272.00</p>
        <p className={styles.text}>
          Выписан: <span>Dr. Zain Philips</span>
        </p>
      </div>
    </div>
  );
};

export default Purchase;
