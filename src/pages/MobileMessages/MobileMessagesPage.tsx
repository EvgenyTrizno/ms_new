import { FC } from "react";
import { useNavigate } from "react-router";

import { Layout } from "../Layout/Layout";
import { MobileContainer, MobileHeader, Search } from "@/widgets";
import { MobileFilter, Text } from "@/shared";
import { useFilter, useUserCondition } from "@/shared/model/store";

import woman from "/assets/woman.jpg";
import call from "/assets/call-incoming.svg";
import info from "/assets/info-circle.svg";
import styles from "./MobileMessagesPage.module.scss";

const MobileMessagesPage: FC = () => {
    const { isFilter } = useFilter();
    const { condition } = useUserCondition();
    const navigate = useNavigate();

    const handleOpenChat = (id: number) => {
        navigate(`/m/chat/${id}`);
    };

    return (
        <Layout>
            <MobileHeader />
            <MobileContainer>
                <div className={styles.box}>
                    <Search height="50px" placeholder="Поиск чатов" />
                    <MobileFilter data={["Сообщения", "Звонки"]} />
                </div>
                <div className={styles.container}>
                    {isFilter === "Сообщения"
                        ? [1, 2, 3].map((item) => (
                              <div
                                  className={styles.message}
                                  key={item}
                                  onClick={() => handleOpenChat(1)}
                              >
                                  <div className={styles.user}>
                                      <div className={styles.img}>
                                          <img src={woman} alt="" />
                                          <div className={styles.online}></div>
                                      </div>
                                      <div className={styles.data}>
                                          <Text type="h2" fz="16px">
                                              Яковенко А. С.
                                          </Text>
                                          <Text
                                              type="p"
                                              color="#7D7F82"
                                              fz="13px"
                                          >
                                              Привет как настроение?
                                          </Text>
                                      </div>
                                  </div>
                                  <div className={styles.time}>
                                      <Text type="p" color="#B1B2B4" fz="14px">
                                          2:23
                                      </Text>
                                  </div>
                                  <div
                                      className={
                                          condition === "Болен"
                                              ? `${styles.count_red}`
                                              : `${styles.count}`
                                      }
                                  >
                                      13
                                  </div>
                              </div>
                          ))
                        : [1, 2, 3].map((item) => (
                              <div
                                  className={styles.call}
                                  key={item}
                                  onClick={() => handleOpenChat(1)}
                              >
                                  <div className={styles.user}>
                                      <img src={call} alt="" />
                                      <img
                                          src={woman}
                                          alt=""
                                          className={styles.avatar}
                                      />
                                      <div className={styles.data}>
                                          <Text type="h2" fz="16px">
                                              Яковенко А. С.
                                          </Text>
                                          <Text
                                              type="p"
                                              color="#7D7F82"
                                              fz="13px"
                                          >
                                              Исходящий вызов (30 минут)
                                          </Text>
                                      </div>
                                  </div>
                                  <Text type="p" color="#B1B2B4">
                                      2:23
                                  </Text>
                                  <img src={info} alt="" />
                              </div>
                          ))}
                </div>
            </MobileContainer>
        </Layout>
    );
};

export default MobileMessagesPage;
