import { FC } from "react";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { Container } from "@/shared/ui/Container";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MobileHeader } from "@/widgets/components/MobileHeader";

import woman from "/assets/woman.jpg";
import styles from "./MobileNotification.module.scss";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";

const MobileNotification: FC = () => {
  const sick = "Болен";
  const { isOpen, setIsOpen } = useBurgerMenu();

  return (
    <Layout>
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container>
        <div className={styles.box}>
          <Text type="p" fz="14px" color="#7D7F82">
            Сегодня
          </Text>
          <div className={styles.list}>
            <div
              className={styles.notify}
              style={{ borderColor: sick ? "#F7E6E8" : "" }}
            >
              <div className={styles.icon}>
                <img src={woman} alt="" />
              </div>
              <div className={styles.content}>
                <Text type="p" fz="13px" color="#7D7F82">
                  Вышел новый пост у мед.центра &nbsp;
                  <div className={styles.center}>
                    <Text type="h2" fz="13px">
                      Абвг
                    </Text>
                  </div>
                </Text>
                <Text type="p" fz="11px" color="#B1B2B4">
                  3 часа назад
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <MobileMenu />
    </Layout>
  );
};

export default MobileNotification;
