import { FC } from "react";
import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { Container } from "@/shared/ui/Container";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./MobileNotification.module.scss";
import { CustomMobileHeader, Notification } from "@/widgets";

const MobileNotification: FC = () => {
  return (
    <Layout>
      <CustomMobileHeader back text="Уведомления" />
      <Container>
        <div className={styles.box}>
          <Text type="p" fz="14px" color="#7D7F82">
            Сегодня
          </Text>
          <div className={styles.list}>
            <Notification
              userSrcAvatar="/assets/avatar.png"
              title="Вышел новый пост у мед.центра Абвг"
              time="3 часа назад"
              userType="comment"
            />

            <Notification
              userSrcAvatar="/assets/avatar.png"
              title="Вышел новый пост у мед.центра Абвг"
              time="3 часа назад"
              userType="eye"
            />

            <Notification
              userSrcAvatar="/assets/avatar.png"
              title="Вышел новый пост у мед.центра Абвг"
              time="3 часа назад"
              userType="send"
            />

            <Notification
              type="system"
              systemType="time"
              title="Напоминание о записи завтра в 12:00"
              time="2 дня назад"
            />

            <Notification
              type="system"
              systemType="success"
              title="Напоминание о записи завтра в 12:00"
              time="2 дня назад"
            />

            <Notification
              type="system"
              systemType="error"
              title="Верификация лица была отклонена."
              link={{ title: "Узнать причину", href: "#" }}
              time="2 дня назад"
            />
          </div>
        </div>
      </Container>
      <MobileMenu />
    </Layout>
  );
};

export default MobileNotification;
