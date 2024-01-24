import { MOBILE } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import { MainUser } from "./ui/MainUser/MainUser";
import styles from "./styles.module.scss";
import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { TabLink } from "./ui/TabLink/TabLink";
import { Doctor } from "./ui/Doctor/Doctor";
import { ShowAllBtn } from "./ui/ShowAllBtn/ShowAllBtn";

const ChatMoreDetailedPage = () => {
  return (
    <>
      {MOBILE ? (
        <>
          <Layout>
            <CustomMobileHeader back />

            <Container>
              <div className={styles.content}>
                <MainUser />

                <div className={styles.links}>
                  <TabLink
                    className={styles.linksItem}
                    src="/assets/icons/add-folder.svg"
                    title="Мед.задания"
                    href="#"
                  />

                  <TabLink
                    className={styles.linksItem}
                    src="/assets/icons/edit.svg"
                    title="Записи"
                    href="/notes"
                  />

                  <TabLink
                    className={styles.linksItem}
                    src="/assets/icons/list.svg"
                    title="Назначения"
                    href="/appointments"
                  />
                </div>

                <div className={styles.listWrapper}>
                  <p className={styles.listWrapperTitle}>Все врачи: (10)</p>

                  <div className={styles.list}>
                    <Doctor />
                    <Doctor />
                    <Doctor />

                    <ShowAllBtn title="Показать всех" count={31} />
                  </div>
                </div>

                <div className={styles.tabs}>
                  <div className={`${styles.tabsItem} ${styles.active}`}>
                    Медиа
                  </div>
                  <div className={styles.tabsItem}>Файлы</div>
                  <div className={styles.tabsItem}>Голос</div>
                  <div className={styles.tabsItem}>Ссылки</div>
                </div>

                <div className={styles.tabsContent}>
                  <div className={styles.images}>
                    <img src="/assets/gradient-img.jpg" alt="img" />
                    <img src="/assets/gradient-img.jpg" alt="img" />
                    <img src="/assets/gradient-img.jpg" alt="img" />
                    <img src="/assets/gradient-img.jpg" alt="img" />
                    <img src="/assets/gradient-img.jpg" alt="img" />
                    <img src="/assets/gradient-img.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </Container>
          </Layout>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ChatMoreDetailedPage;
