import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { Container } from "@/shared/ui/Container";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Links } from "./ui/Links/Links";
import { Characteristics } from "./ui/Characteristics/Characteristics";
import { News } from "./ui/News/News";
import { Gallery } from "./ui/Gallery/Gallery";
import { useEffect, useRef, useState } from "react";
import cn from "clsx";

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
      {MOBILE && <CustomMobileHeader back text="Клиника (~31%)" />}
      <Container>
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
