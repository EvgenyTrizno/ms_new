import { useNavigate } from "react-router";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <svg
          onClick={() => navigate(-1)}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginRight: 12 }}
        >
          <path
            d="M21 26L11 16L21 6"
            stroke="#262626"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Link className={styles.content} to="/chat-more-detailed">
          <p>Ведущая группа</p>

          <span>Онлайн 24/7</span>
        </Link>

        <img className={styles.img} src="/assets/icons/med.svg" alt="med" />
      </div>

      <div className={styles.headerBottom}>
        <div className={styles.headerBottomContent}>
          <p>Состояние</p>
          <p>
            Удов. <span>68%</span>
          </p>
        </div>

        <img className={styles.pulse} src="/assets/pulse.png" alt="pulse" />
      </div>
    </div>
  );
};
