import { FC, ReactNode, TouchEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  closeHandler: () => void;
  title: string;
};

export const MobilePopup: FC<Props> = ({
  children,
  isOpen,
  closeHandler,
  title,
}) => {
  const [touchStart, setTouchStart] = useState(0);
  const [bottomPosition, setBottomPosition] = useState(0);
  console.log(bottomPosition);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const currentTouch = e.touches[0].clientY;
    const touchDelta = currentTouch - touchStart;

    if (touchDelta > 0) {
      setBottomPosition(-touchDelta);
    }
  };

  const handleTouchEnd = () => {
    if (-bottomPosition > 150) {
      closeHandler();
      setBottomPosition(-2000);
    } else {
      setBottomPosition(0);
    }
  };

  useEffect(() => {
    document.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setBottomPosition(0);
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [isOpen]);

  const popupStyle = {
    bottom: !isOpen ? "-200vh" : `${bottomPosition}px`,
    transition:
      bottomPosition === -2000
        ? "bottom 0.3s ease-in-out"
        : "bottom 0.2s ease-in-out",
  };

  return (
    <>
      <div className={`${styles.bg} ${isOpen ? styles.active : ""}`}></div>
      <div
        className={`${styles.wrapper} ${isOpen ? styles.active : ""}`}
        style={popupStyle}
      >
        <div className={styles.inner}>
          <div
            className={styles.lineBtn}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => closeHandler()}
          >
            <div></div>
          </div>

          <h5 className={styles.title}>{title}</h5>

          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </>
  );
};
