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

const ClinicPage = () => {
  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text="Клиника (~31%)" />}
      <Container>
        <img
          className={styles.banner}
          src="/assets/clinic-post.jpg"
          alt="clinic"
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
