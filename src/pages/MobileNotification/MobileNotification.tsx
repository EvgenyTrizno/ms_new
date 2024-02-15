import { FC } from "react";
import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { Container } from "@/shared/ui/Container";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./MobileNotification.module.scss";
import { CustomMobileHeader, Notification } from "@/widgets";
import { useQuery } from "react-query";
import { getNotifications } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { formatRelativeDate } from "@/shared/utils";

const currentDate = new Date();

const MobileNotification: FC = () => {
  const { getCookie } = useCookie();
  const { data: notificationsData } = useQuery(
    ["notifications"],
    () => getNotifications(getCookie("access_token") as string),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: false,
    }
  );

  return (
    <>
      <CustomMobileHeader back text="Уведомления" />
      <Layout>
        <Container>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <Text type="p" fz="14px" color="#7D7F82">
                Непрочитанные
              </Text>
              <div className={styles.list}>
                {notificationsData?.data.reverse().map((el) => {
                  return (
                    <Notification
                      userSrcAvatar={el.user?.image}
                      title={el.text}
                      time={formatRelativeDate(new Date(el.created_at))}
                      userType="standart"
                    />
                  );
                })}
              </div>
            </div>

            {notificationsData?.data.find((el) => {
              return currentDate === new Date(el.created_at);
            }) && (
              <div className={styles.box}>
                <Text type="p" fz="14px" color="#7D7F82">
                  Сегодня
                </Text>
                <div className={styles.list}>
                  {notificationsData?.data
                    .filter((el) => {
                      return currentDate === new Date(el.created_at);
                    })
                    .reverse()
                    .map((el) => {
                      return (
                        <Notification
                          userSrcAvatar={el.user?.image}
                          title={el.text}
                          time={formatRelativeDate(new Date(el.created_at))}
                          userType="standart"
                        />
                      );
                    })}
                </div>
              </div>
            )}

            <div className={`${styles.box} ${styles.systemBox}`}>
              <div className={`${styles.list} ${styles.systemList}`}>
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
          </div>
        </Container>
      </Layout>

      <MobileMenu />
    </>
  );
};

export default MobileNotification;
