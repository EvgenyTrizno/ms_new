import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { Container } from "@/shared/ui/Container";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import { Links } from "./ui/Links/Links";
import { Characteristics } from "./ui/Characteristics/Characteristics";
import { News } from "./ui/News/News";
import { Gallery } from "./ui/Gallery/Gallery";
import { useEffect, useRef, useState } from "react";
import cn from "clsx";
import { Link } from "react-router-dom";
import { AdditionalMenuBtn } from "@/shared/ui/AdditionalMenuBtn";

const ClinicPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <Layout>
      {MOBILE && (
        <CustomMobileHeader
          back
          text="Клиника (~31%)"
          btn={
            <AdditionalMenuBtn
              list={[
                { title: "Заблокировать", onClick: () => console.log("asd") },
              ]}
            />
          }
        />
      )}
      <Container>
        <div className={styles.bannerWrapper}>
          <img
            className={cn(styles.banner, {
              [styles.active]: scrollY > 0,
            })}
            src="/assets/clinic-post.jpg"
            alt="clinic"
            onClick={() => {
              if (!bannerRef.current) return;
              bannerRef.current.classList.add(styles.active);
            }}
            ref={bannerRef}
          />

          <Link className={styles.helpTextWrapper} to="/">
            <p>Имеется запись на 24.01.24 / 09:00</p>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <h1 className={styles.title}>Клиника неврологии</h1>

        <div className={styles.parameters}>
          <p>
            Страна: <span>США</span>
          </p>

          <p>
            Город: <span>Нью-Йорк</span>
          </p>

          <p>
            Адрес: <span>Сша, Нью-Йорк...</span>
          </p>
        </div>

        <div className={styles.btns}>
          <Button
            title="Написать"
            styleType="outline"
            onClick={() => console.log("click")}
          />
          <Button title="Подписаться" onClick={() => console.log("click")} />
        </div>

        <Links />
        <Characteristics className={styles.characteristics} />

        <News />

        <Gallery className={styles.gallery} />
      </Container>
    </Layout>
  );
};

export default ClinicPage;
